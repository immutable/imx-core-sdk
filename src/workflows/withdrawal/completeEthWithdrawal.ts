import { Signer } from '@ethersproject/abstract-signer';
import { TransactionResponse } from '@ethersproject/providers';
import { EncodingApi, UsersApi } from '../../api';
import { ImmutableXConfiguration } from '../../config';
import {
  Core,
  Core__factory,
  CoreV4__factory,
  Registration,
  Registration__factory,
  RegistrationV4__factory,
} from '../../contracts';
import {
  getSignableRegistrationOnchain,
  isRegisteredOnChainWorkflow,
  signRegisterEthAddress,
} from '../registration';
import { getEncodeAssetInfo } from './getEncodeAssetInfo';
import { WalletConnection } from 'src/types';

async function executeRegisterAndWithdrawEth(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  contract: Registration,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const populatedTransaction =
    await contract.populateTransaction.registerAndWithdraw(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature,
      assetType,
    );

  return signer.sendTransaction(populatedTransaction);
}

async function executeWithdrawEth(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  contract: Core,
): Promise<TransactionResponse> {
  const populatedTransaction = await contract.populateTransaction.withdraw(
    starkPublicKey,
    assetType,
  );

  return signer.sendTransaction(populatedTransaction);
}

export async function completeEthWithdrawalV1Workflow(
  signer: Signer,
  starkPublicKey: string,
  encodingApi: EncodingApi,
  usersApi: UsersApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  const assetType = await getEncodeAssetInfo('asset', 'ETH', encodingApi);

  const coreContract = Core__factory.connect(
    config.ethConfiguration.coreContractAddress,
    signer,
  );

  const registrationContract = Registration__factory.connect(
    config.ethConfiguration.registrationContractAddress,
    signer,
  );

  const isRegistered = await isRegisteredOnChainWorkflow(
    starkPublicKey,
    registrationContract,
  );

  if (!isRegistered) {
    return executeRegisterAndWithdrawEth(
      signer,
      assetType.asset_type,
      starkPublicKey,
      registrationContract,
      usersApi,
    );
  } else {
    return executeWithdrawEth(
      signer,
      assetType.asset_type,
      starkPublicKey,
      coreContract,
    );
  }
}

export async function completeEthWithdrawalV2Workflow(
  signer: Signer,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  const assetType = await getEncodeAssetInfo('asset', 'ETH', encodingApi);

  const coreContract = CoreV4__factory.connect(
    config.ethConfiguration.coreContractAddress,
    signer,
  );

  const ownerKey = await signer.getAddress();

  const populatedTransaction = await coreContract.populateTransaction.withdraw(
    ownerKey,
    assetType.asset_type,
  );

  return signer.sendTransaction(populatedTransaction);
}

export async function completeAllEthWithdrawalWorkflow(
  signer: Signer,
  starkPublicKey: string,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  const assetType = await getEncodeAssetInfo('asset', 'ETH', encodingApi);

  const registrationContract = RegistrationV4__factory.connect(
    config.ethConfiguration.registrationContractAddress,
    signer,
  );

  const ethAddress = await signer.getAddress();
  const populatedTransaction =
    await registrationContract.populateTransaction.withdrawAll(
      ethAddress,
      starkPublicKey,
      assetType.asset_id,
    );

  return signer.sendTransaction(populatedTransaction);
}

export async function registerAndCompleteAllEthWithdrawalWorkflow(
  walletConnection: WalletConnection,
  ethAddress: string,
  starkPublicKey: string,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  const assetType = await getEncodeAssetInfo('asset', 'ETH', encodingApi);

  const registrationContract = RegistrationV4__factory.connect(
    config.ethConfiguration.registrationContractAddress,
    walletConnection.ethSigner,
  );

  const starkSignature = await signRegisterEthAddress(
    walletConnection.starkSigner,
    ethAddress,
    starkPublicKey,
  );

  const populatedTransaction =
    await registrationContract.populateTransaction.registerAndWithdrawAll(
      ethAddress,
      starkPublicKey,
      starkSignature,
      assetType.asset_id,
    );

  return walletConnection.ethSigner.sendTransaction(populatedTransaction);
}

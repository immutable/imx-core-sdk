import { Signer } from '@ethersproject/abstract-signer';
import { TransactionResponse } from '@ethersproject/providers';
import { EncodingApi, UsersApi } from '../../api';
import { ImmutableXConfiguration } from '../../config';
import {
  StarkV3,
  StarkV3__factory,
  Registration,
  Registration__factory,
  StarkV4__factory,
} from '../../contracts';
import { ERC20Token } from '../../types';
import {
  getSignableRegistrationOnchain,
  isRegisteredOnChainWorkflow,
} from '../registration';
import { getEncodeAssetInfo } from './getEncodeAssetInfo';

async function executeRegisterAndWithdrawERC20(
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

async function executeWithdrawERC20(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  contract: StarkV3,
): Promise<TransactionResponse> {
  const populatedTransaction = await contract.populateTransaction.withdraw(
    starkPublicKey,
    assetType,
  );

  return signer.sendTransaction(populatedTransaction);
}

export async function completeERC20WithdrawalV1Workflow(
  signer: Signer,
  starkPublicKey: string,
  token: ERC20Token,
  encodingApi: EncodingApi,
  usersApi: UsersApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  const assetType = await getEncodeAssetInfo('asset', 'ERC20', encodingApi, {
    token_address: token.tokenAddress,
  });

  const coreContract = StarkV3__factory.connect(
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
    return executeRegisterAndWithdrawERC20(
      signer,
      assetType.asset_type,
      starkPublicKey,
      registrationContract,
      usersApi,
    );
  } else {
    return executeWithdrawERC20(
      signer,
      assetType.asset_type,
      starkPublicKey,
      coreContract,
    );
  }
}

export async function completeERC20WithdrawalV2Workflow(
  signer: Signer,
  ownerKey: string,
  token: ERC20Token,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  const assetType = await getEncodeAssetInfo('asset', 'ERC20', encodingApi, {
    token_address: token.tokenAddress,
  });

  const coreContract = StarkV4__factory.connect(
    config.ethConfiguration.coreContractAddress,
    signer,
  );

  const populatedTransaction = await coreContract.populateTransaction.withdraw(
    ownerKey,
    assetType.asset_type,
  );

  return signer.sendTransaction(populatedTransaction);
}

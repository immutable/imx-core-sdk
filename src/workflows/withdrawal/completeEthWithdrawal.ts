import { Signer } from '@ethersproject/abstract-signer';
import { TransactionResponse } from '@ethersproject/providers';
import { EncodingApi, UsersApi } from '../../api';
import { ImmutableXConfiguration } from '../../config';
import {
  Core,
  Core__factory,
  Registration,
  Registration__factory,
} from '../../contracts';
import {
  getSignableRegistrationOnchain,
  isRegisteredOnChainWorkflow,
} from '../registration';
import { getEncodeAssetInfo } from './getEncodeAssetInfo';

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

export async function completeEthWithdrawalWorkflow(
  signer: Signer,
  starkPublicKey: string,
  encodingApi: EncodingApi,
  usersApi: UsersApi,
  config: ImmutableXConfiguration,
) {
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

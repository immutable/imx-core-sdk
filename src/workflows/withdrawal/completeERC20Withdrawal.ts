import { Signer } from '@ethersproject/abstract-signer';
import { TransactionResponse } from '@ethersproject/providers';
import { EncodingApi, UsersApi } from '../../api';
import {
  Core,
  Core__factory,
  Registration,
  Registration__factory,
} from '../../contracts';
import { Config, ERC20Withdrawal, TokenType } from '../../types';
import {
  getSignableRegistrationOnchain,
  isRegisteredOnChainWorkflow,
} from '../registration';
import { getEncodeAssetInfo } from './getEncodeAssetInfo';

export async function completeERC20WithdrawalWorfklow(
  signer: Signer,
  starkPublicKey: string,
  token: ERC20Withdrawal,
  encodingApi: EncodingApi,
  usersApi: UsersApi,
  config: Config,
) {
  // TODO remove log once UAT passes
  console.log('completeERC20WithdrawalWorfklow');
  const assetType = await getEncodeAssetInfo(
    'asset',
    TokenType.ERC20,
    encodingApi,
    {
      token_id: token.data.tokenId,
      token_address: token.data.tokenAddress,
    },
  );

  // Get instance of core contract
  const coreContract = Core__factory.connect(
    config.starkContractAddress,
    signer,
  );

  // Get instance of registration contract
  const registrationContract = Registration__factory.connect(
    config.registrationContractAddress,
    signer,
  );

  // Check if user is registered onchain
  const isRegistered = await isRegisteredOnChainWorkflow(
    starkPublicKey,
    registrationContract,
  );
  // TODO remove log once UAT passes
  console.log('isRegistered', isRegistered);

  if (!isRegistered) {
    return executeRegisterAndWithdrawERC20(
      signer,
      assetType.asset_type!,
      starkPublicKey,
      registrationContract,
      usersApi,
    );
  } else {
    return executeWithdrawERC20(
      signer,
      assetType.asset_type!,
      starkPublicKey,
      coreContract,
    );
  }
}

async function executeRegisterAndWithdrawERC20(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  contract: Registration,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  // TODO remove log once UAT passes
  console.log('executeRegisterAndWithdrawERC20');
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const populatedTrasaction =
    await contract.populateTransaction.registerAndWithdraw(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature!,
      assetType,
    );

  return signer.sendTransaction(populatedTrasaction);
}

async function executeWithdrawERC20(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  contract: Core,
): Promise<TransactionResponse> {
  // TODO remove log once UAT passes
  console.log('executeWithdrawERC20');
  const populatedTrasaction = await contract.populateTransaction.withdraw(
    starkPublicKey,
    assetType,
  );
  return signer.sendTransaction(populatedTrasaction);
}

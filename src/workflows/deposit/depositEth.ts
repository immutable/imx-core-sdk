import { Signer } from '@ethersproject/abstract-signer';
import { TransactionResponse } from '@ethersproject/providers';
import { DepositsApi, EncodingApi, UsersApi } from '../../api';
import { parseEther } from 'ethers/lib/utils';
import { Core, Core__factory, Registration__factory } from '../../contracts';
import {
  getSignableRegistrationOnchain,
  isRegisteredOnChainWorkflow,
} from '../registration';
import { Config, ETHDeposit } from '../../types';
import { BigNumber } from 'ethers';

interface ETHTokenData {
  decimals: number;
}

export async function depositEthWorkflow(
  signer: Signer,
  deposit: ETHDeposit,
  depositsApi: DepositsApi,
  usersApi: UsersApi,
  encodingApi: EncodingApi,
  config: Config,
): Promise<TransactionResponse> {
  // Configure request parameters
  const user = (await signer.getAddress()).toLowerCase();
  const data: ETHTokenData = {
    decimals: 18,
  };
  const amount = parseEther(deposit.amount);

  // Get signable deposit details
  const getSignableDepositRequest = {
    user,
    token: {
      type: deposit.type,
      data,
    },
    amount: amount.toString(),
  };

  const signableDepositResult = await depositsApi.getSignableDeposit({
    getSignableDepositRequest,
  });

  const encodingResult = await encodingApi.encodeAsset({
    assetType: 'asset',
    encodeAssetRequest: {
      token: {
        type: deposit.type,
      },
    },
  });

  const assetType = encodingResult.data.asset_type!;
  const starkPublicKey = signableDepositResult.data.stark_key!;
  const vaultId = signableDepositResult.data.vault_id!;

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

  if (!isRegistered) {
    return executeRegisterAndDepositEth(
      signer,
      amount,
      assetType,
      starkPublicKey,
      vaultId,
      coreContract,
      usersApi,
    );
  } else {
    return executeDepositEth(
      signer,
      amount,
      assetType,
      starkPublicKey,
      vaultId,
      coreContract,
    );
  }
}

async function executeRegisterAndDepositEth(
  signer: Signer,
  amount: BigNumber,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const trx = await contract.populateTransaction.registerAndDepositEth(
    etherKey,
    starkPublicKey,
    signableResult.operator_signature!,
    assetType,
    vaultId,
  );

  return signer.sendTransaction({ ...trx, value: amount });
}

async function executeDepositEth(
  signer: Signer,
  amount: BigNumber,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
): Promise<TransactionResponse> {
  const trx = await contract.populateTransaction[
    'deposit(uint256,uint256,uint256)'
  ](starkPublicKey, assetType, vaultId);

  return signer.sendTransaction({ ...trx, value: amount });
}

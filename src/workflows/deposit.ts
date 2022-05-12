import { Signer } from '@ethersproject/abstract-signer';
import {
  DepositsApi,
  EncodingApi,
  TokensApi,
  UsersApi,
  CoreEncodeAssetTokenData,
} from '../api';
import { parseEther, parseUnits } from 'ethers/lib/utils';
import { Bytes32 } from 'soltypes';
import { Core } from '../contracts';
import { isRegisteredOnChain } from './registration';
import { ERC20Deposit, ETHDeposit } from '../types';
import { BigNumber } from 'ethers';

/**
 * ETH deposits
 */
interface ETHTokenData {
  decimals: number;
}

export async function depositEthWorkflow(
  signer: Signer,
  deposit: ETHDeposit,
  depositsApi: DepositsApi,
  usersApi: UsersApi,
  encodingApi: EncodingApi,
  contract: Core,
): Promise<string> {
  // Signable deposit request
  const user = (await signer.getAddress()).toLowerCase();
  const data: ETHTokenData = {
    decimals: 18,
  };
  const amount = parseEther(deposit.amount);

  const signableDepositResult = await depositsApi.getSignableDeposit({
    getSignableDepositRequest: {
      user,
      token: {
        type: deposit.type,
        data,
      },
      amount: amount.toString(),
    },
  });

  const encodingResult = await encodingApi.encodeAsset({
    assetType: 'asset',
    encodeAssetRequest: {
      token: {
        type: deposit.type,
        data: {},
      },
    },
  });

  const assetType = encodingResult.data.asset_type!;
  const starkPublicKey = signableDepositResult.data.stark_key!;
  const vaultId = signableDepositResult.data.vault_id!;

  // Check if user is registered onchain
  const isRegistered = await isRegisteredOnChain(signer, contract);

  if (!isRegistered) {
    return executeRegisterAndDepositEth(
      signer,
      amount,
      assetType,
      starkPublicKey,
      vaultId,
      contract,
      usersApi,
    );
  } else {
    return executeDepositEth(
      signer,
      amount,
      assetType,
      starkPublicKey,
      vaultId,
      contract,
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
): Promise<string> {
  const etherKey = await signer.getAddress();

  // TODO possibly move to registration workflow?
  const signableRegistrationResponse = await usersApi.getSignableRegistration({
    getSignableRegistrationRequest: {
      ether_key: etherKey,
      stark_key: starkPublicKey,
    },
  });

  const trx = await contract.populateTransaction.registerAndDepositEth(
    etherKey,
    starkPublicKey,
    signableRegistrationResponse.data.operator_signature!,
    assetType,
    vaultId,
  );

  return signer
    .sendTransaction({ ...trx, value: amount })
    .then(res => res.hash);
}

async function executeDepositEth(
  signer: Signer,
  amount: BigNumber,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
): Promise<string> {
  const trx = await contract.populateTransaction[
    'deposit(uint256,uint256,uint256)'
  ](starkPublicKey, assetType, vaultId);

  return signer
    .sendTransaction({ ...trx, value: amount })
    .then(res => res.hash);
}

/**
 * ERC20 deposits
 * TODO approval step?
 */
interface ERC20TokenData {
  decimals: number;
  token_address: string;
}

export async function depositERC20Workflow(
  signer: Signer,
  deposit: ERC20Deposit,
  depositsApi: DepositsApi,
  usersApi: UsersApi,
  tokensApi: TokensApi,
  encodingApi: EncodingApi,
  contract: Core,
): Promise<string> {
  // Signable deposit request
  const user = (await signer.getAddress()).toLowerCase();

  // Get decimals
  let decimals;
  try {
    const token = await tokensApi.getToken({ address: deposit.tokenAddress });
    decimals = parseInt(token.data.decimals!);
  } catch (error) {
    throw new Error('Code 2001 - Token not available in IMX.');
  }

  const data: ERC20TokenData = {
    decimals,
    token_address: deposit.tokenAddress,
  };

  const amount = parseUnits(deposit.amount, BigNumber.from(decimals));

  const signableDepositResult = await depositsApi.getSignableDeposit({
    getSignableDepositRequest: {
      user,
      token: {
        type: deposit.type,
        data,
      },
      amount: amount.toString(),
    },
  });

  const encodingResult = await encodingApi.encodeAsset({
    assetType: 'asset',
    encodeAssetRequest: {
      token: {
        type: deposit.type,
        data: {
          token_address: deposit.tokenAddress,
        },
      },
    },
  });

  const assetType = encodingResult.data.asset_type!;
  const starkPublicKey = signableDepositResult.data.stark_key!;
  const vaultId = signableDepositResult.data.vault_id!;
  const quantizedAmount = BigNumber.from(signableDepositResult.data.amount!);

  // Check if user is registered onchain
  const isRegistered = await isRegisteredOnChain(signer, contract);

  if (!isRegistered) {
    return executeRegisterAndDepositERC20(
      signer,
      quantizedAmount,
      assetType,
      starkPublicKey,
      vaultId,
      contract,
      usersApi,
    );
  } else {
    return executeDepositERC20(
      signer,
      quantizedAmount,
      assetType,
      starkPublicKey,
      vaultId,
      contract,
    );
  }
}

async function executeRegisterAndDepositERC20(
  signer: Signer,
  quantizedAmount: BigNumber,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
  usersApi: UsersApi,
): Promise<string> {
  const etherKey = await signer.getAddress();

  // TODO possibly move to registration workflow?
  const signableRegistrationResponse = await usersApi.getSignableRegistration({
    getSignableRegistrationRequest: {
      ether_key: etherKey,
      stark_key: starkPublicKey,
    },
  });

  const trx = await contract.populateTransaction.registerAndDepositERC20(
    etherKey,
    starkPublicKey,
    signableRegistrationResponse.data.operator_signature!,
    assetType,
    vaultId,
    quantizedAmount,
  );

  return signer.sendTransaction({ ...trx }).then(res => res.hash);
}

async function executeDepositERC20(
  signer: Signer,
  quantizedAmount: BigNumber,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
): Promise<string> {
  const trx = await contract.populateTransaction.depositERC20(
    starkPublicKey,
    assetType,
    vaultId,
    quantizedAmount,
  );

  return signer.sendTransaction({ ...trx }).then(res => res.hash);
}

// /**
//  * ERC721 deposits
//  * TODO approval step?
//  */
// interface ERC721TokenData {
//   token_id: string;
//   token_address: string;
// }

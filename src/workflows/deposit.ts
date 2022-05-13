import { Signer } from '@ethersproject/abstract-signer';
import { DepositsApi, EncodingApi, TokensApi, UsersApi } from '../api';
import { parseEther, parseUnits } from 'ethers/lib/utils';
import { Core } from '../contracts';
import { isRegisteredOnChain } from './registration';
import { ERC20Deposit, ERC721Deposit, ETHDeposit } from '../types';
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
  console.log('\ndepositERC20Workflow\n');
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
  console.log('\namount');
  console.log(amount);

  // approveNFTF goes here

  // {
  //   "user": "0x9c1634bebc88653d2aebf4c14a3031f62092b1d9",
  //   "token": {
  //       "type": "ERC20",
  //       "data": {
  //           "decimals": 18,
  //           "token_address": "0x73f99ca65b1a0aef2d4591b1b543d789860851bf"
  //       }
  //   },
  //   "amount": "10000000000000"
  // }
  const getSignableDepositRequest = {
    user,
    token: {
      type: deposit.type,
      data,
    },
    amount: amount.toString(),
  };
  console.log('\ngetSignableDepositRequest');
  console.log(JSON.stringify(getSignableDepositRequest, null, 2));

  const signableDepositResult = await depositsApi.getSignableDeposit({
    getSignableDepositRequest,
  });

  console.log('\nsignableDepositResult');
  console.log(JSON.stringify(signableDepositResult.data, null, 2));

  // {
  //   "stark_key": "0x024b12ae158aa105c8ceb0e23b2f96f7247271d5e99ffd35986f54ebe27ccef4",
  //   "vault_id": 1503330602,
  //   "amount": "100000",
  //   "asset_id": "0x02f20b13f93e2699d16a6c9c48b6fc2d95eb4d57239b15a85c68a708cb6736a3",
  //   "nonce": 699883910
  // }

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

  console.log('\nencodingResult');
  console.log(JSON.stringify(encodingResult.data, null, 2));

  console.log('\nassetType');
  console.log(
    '1332279144540031131855948241395971881980911221795265712468282980861947098787',
  );

  const assetType = encodingResult.data.asset_type!;
  // const assetType =
  //   '1332279144540031131855948241395971881980911221795265712468282980861947098787';
  const starkPublicKey = signableDepositResult.data.stark_key!;
  const vaultId = signableDepositResult.data.vault_id!;
  const quantizedAmount = BigNumber.from(signableDepositResult.data.amount!);

  // Check if user is registered onchain
  const isRegistered = await isRegisteredOnChain(signer, contract);
  console.log(`\nisRegistered: ${isRegistered}`);

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

  return signer.sendTransaction(trx).then(res => res.hash);
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

  return signer.sendTransaction(trx).then(res => res.hash);
}

/**
 * ERC721 deposits
 * TODO approval step?
 */
interface ERC721TokenData {
  token_id: string;
  token_address: string;
}

export async function depositERC721Workflow(
  signer: Signer,
  deposit: ERC721Deposit,
  depositsApi: DepositsApi,
  usersApi: UsersApi,
  encodingApi: EncodingApi,
  contract: Core,
): Promise<string> {
  // Signable deposit request
  const user = (await signer.getAddress()).toLowerCase();

  const data: ERC721TokenData = {
    token_address: deposit.tokenAddress,
    token_id: deposit.tokenId,
  };

  const amount = '1';

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
          token_id: deposit.tokenId,
        },
      },
    },
  });

  const assetType = encodingResult.data.asset_type!;
  const starkPublicKey = signableDepositResult.data.stark_key!;
  const vaultId = signableDepositResult.data.vault_id!;
  // const quantizedAmount = BigNumber.from(signableDepositResult.data.amount!);

  // Check if user is registered onchain
  const isRegistered = await isRegisteredOnChain(signer, contract);

  if (!isRegistered) {
    return executeRegisterAndDepositERC721(
      signer,
      deposit.tokenId,
      assetType,
      starkPublicKey,
      vaultId,
      contract,
      usersApi,
    );
  } else {
    return executeDepositERC721(
      signer,
      deposit.tokenId,
      assetType,
      starkPublicKey,
      vaultId,
      contract,
    );
  }
}

async function executeRegisterAndDepositERC721(
  signer: Signer,
  tokenId: string,
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

  // No wrapper function for depositing NFTs, do as consecutive transactions
  const registerTrx = await contract.populateTransaction.registerUser(
    etherKey,
    starkPublicKey,
    signableRegistrationResponse.data.operator_signature!,
  );
  await signer.sendTransaction(registerTrx).then(res => res.hash);

  const trx = await contract.populateTransaction.depositNft(
    starkPublicKey,
    assetType,
    vaultId,
    tokenId,
  );

  return signer.sendTransaction(trx).then(res => res.hash);
}

async function executeDepositERC721(
  signer: Signer,
  tokenId: string,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
): Promise<string> {
  const trx = await contract.populateTransaction.depositNft(
    starkPublicKey,
    assetType,
    vaultId,
    tokenId,
  );

  return signer.sendTransaction(trx).then(res => res.hash);
}

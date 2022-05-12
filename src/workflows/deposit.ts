import { Signer } from '@ethersproject/abstract-signer';
import { DepositsApi, UsersApi } from '../api';
import { parseEther } from 'ethers/lib/utils';
import { Bytes32 } from 'soltypes';
import { Core } from '../contracts';
import { isRegisteredOnChain } from './registration';
import { DepositableETH } from '../types';

/**
 * ETH deposits
 */
interface ETHTokenData {
  decimals: number;
}

export async function depositEthWorkflow(
  signer: Signer,
  token: DepositableETH,
  depositsApi: DepositsApi,
  usersApi: UsersApi,
  contract: Core,
): Promise<string> {
  // Signable deposit request
  const user = (await signer.getAddress()).toLowerCase();
  const data: ETHTokenData = {
    decimals: 18,
  };
  const amount = parseEther(token.amount).toString();

  const signableDepositResult = await depositsApi.getSignableDeposit({
    getSignableDepositRequest: {
      user,
      token: {
        type: token.type,
        data,
      },
      amount,
    },
  });

  // TODO get from new encode asset endpoint
  const assetType = new Bytes32(signableDepositResult.data.asset_id!).toUint()
    .val;
  const starkPublicKey = signableDepositResult.data.stark_key!;
  const vaultId = signableDepositResult.data.vault_id!;

  // Check if user is registered onchain
  const isRegistered = await isRegisteredOnChain(signer, contract);

  if (!isRegistered) {
    return executeRegisterAndDepositEth(
      signer,
      token,
      assetType,
      starkPublicKey,
      vaultId,
      contract,
      usersApi,
    );
  } else {
    return executeDepositEth(
      signer,
      token,
      assetType,
      starkPublicKey,
      vaultId,
      contract,
    );
  }
}

async function executeRegisterAndDepositEth(
  signer: Signer,
  token: DepositableETH,
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
    .sendTransaction({ ...trx, value: parseEther(token.amount) })
    .then(res => res.hash);
}

async function executeDepositEth(
  signer: Signer,
  token: DepositableETH,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
): Promise<string> {
  const trx = await contract.populateTransaction[
    'deposit(uint256,uint256,uint256)'
  ](starkPublicKey, assetType, vaultId);

  return signer
    .sendTransaction({ ...trx, value: parseEther(token.amount) })
    .then(res => res.hash);
}

// /**
//  * ERC20 deposits
//  */
// interface ERC20TokenData {
//   decimals: number;
//   token_address: string;
// }

// /**
//  * ERC721 deposits
//  */
// interface ERC721TokenData {
//   token_id: string;
//   token_address: string;
// }
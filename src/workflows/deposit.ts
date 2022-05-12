import { Signer } from '@ethersproject/abstract-signer';
import { DepositsApi, GetSignableDepositResponse } from '../api';
import { parseEther } from 'ethers/lib/utils';
import { Bytes32 } from 'soltypes';
import { Core } from '../contracts';
import { isRegisteredOnChain } from './registration';
import { DepositableETH } from '../types';

/**
 * ETH
 */
interface ETHTokenData {
  decimals: number;
}

export async function depositEthWorkflow(
  signer: Signer,
  token: DepositableETH,
  depositsApi: DepositsApi,
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

  // Check if user is registered onchain
  const isRegistered = await isRegisteredOnChain(signer, contract);

  if (!isRegistered) {
    return executeRegisterAndDepositEth(
      signer,
      token,
      signableDepositResult.data,
      contract,
    );
  } else {
    return executeDepositEth(
      signer,
      token,
      signableDepositResult.data,
      contract,
    );
  }
}

export async function executeRegisterAndDepositEth(
  signer: Signer,
  token: DepositableETH,
  signableDepositResult: GetSignableDepositResponse,
  contract: Core,
): Promise<string> {
  const assetType = new Bytes32(signableDepositResult.asset_id!).toUint().val;
  const starkPublicKey = signableDepositResult.stark_key!;
  const vaultId = signableDepositResult.vault_id!;

  const trx = await contract.populateTransaction[
    'deposit(uint256,uint256,uint256)'
  ](starkPublicKey, assetType, vaultId);

  return signer
    .sendTransaction({ ...trx, value: parseEther(token.amount) })
    .then(res => res.hash);
}

export async function executeDepositEth(
  signer: Signer,
  token: DepositableETH,
  signableDepositResult: GetSignableDepositResponse,
  contract: Core,
): Promise<string> {
  const assetType = new Bytes32(signableDepositResult.asset_id!).toUint().val;
  const starkPublicKey = signableDepositResult.stark_key!;
  const vaultId = signableDepositResult.vault_id!;

  const trx = await contract.populateTransaction[
    'deposit(uint256,uint256,uint256)'
  ](starkPublicKey, assetType, vaultId);

  return signer
    .sendTransaction({ ...trx, value: parseEther(token.amount) })
    .then(res => res.hash);
}

/**
 * ERC20
 */
interface ERC20TokenData {
  decimals: number;
  token_address: string;
}

/**
 * ERC721
 */
interface ERC721TokenData {
  token_id: string;
  token_address: string;
}

import { ec } from 'elliptic';
import {
  MintRequest,
  GetSignableTransferRequestV1,
  GetSignableTransferRequest,
  Configuration,
} from '../api';
import { GetSignableBurnRequest } from '../workflows/types';
import { Signer as L1Signer } from '@ethersproject/abstract-signer';

export { L1Signer };

export interface L2Signer {
  signMessage(message: string): Promise<string>;
  getAddress(): string | Promise<string>;
}

export interface StarkWallet {
  path: string;
  starkPublicKey: string;
  starkKeyPair: ec.KeyPair;
}

export interface WalletConnection {
  l1Signer: L1Signer;
  l2Signer: L2Signer;
}

export type EthNetwork = 'dev' | 'ropsten' | 'mainnet';

export interface Config {
  api: Configuration;
  starkContractAddress: string;
  registrationContractAddress: string;
}

export type UnsignedMintRequest = Omit<MintRequest, 'auth_signature'>;
export type UnsignedTransferRequest = GetSignableTransferRequestV1;
export type UnsignedBatchNftTransferRequest = GetSignableTransferRequest;
export type UnsignedBurnRequest = GetSignableBurnRequest;

export * from './deposit';
export * from './withdrawal';
export * from './token';
export * from './signable-withdrawal';

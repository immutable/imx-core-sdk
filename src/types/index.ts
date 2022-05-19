import { ec } from 'elliptic';
import {
  MintRequest,
  GetSignableTransferRequestV1,
  GetSignableTransferRequest,
  Configuration,
} from '../api';
import { GetSignableBurnRequest } from '../workflows/types';

export interface StarkWallet {
  starkPublicKey: string;
  starkKeyPair: ec.KeyPair;
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

import { ec } from 'elliptic';
import {
  MintRequest,
  GetSignableTransferRequestV1,
  GetSignableTransferRequest,
} from '../api';
import { GetSignableBurnRequest } from '../workflows/types';

export interface StarkWallet {
  starkPublicKey: string;
  starkKeyPair: ec.KeyPair;
}

export type EthNetwork = 'ropsten' | 'mainnet';

export interface Environment {
  publicApiUrl: string;
  starkContractAddress: string;
}

export type UnsignedMintRequest = Omit<MintRequest, 'auth_signature'>;
export type UnsignedTransferRequest = GetSignableTransferRequestV1;
export type UnsignedBatchNftTransferRequest = GetSignableTransferRequest;
export type UnsignedBurnRequest = GetSignableBurnRequest;

export * from './deposit';

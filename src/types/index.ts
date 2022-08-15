import {
  MintRequest,
  GetSignableTransferRequestV1,
  GetSignableTransferRequest,
  Configuration as APIConfiguration,
} from '../api';
import { GetSignableBurnRequest } from '../workflows/types';
import { Signer as EthSigner } from '@ethersproject/abstract-signer';

export { EthSigner };

export interface StarkSigner {
  signMessage(message: string): Promise<string>;
  getAddress(): string | Promise<string>;
}

// export interface StarkWallet {
//   path: string;
//   starkPublicKey: string;
//   starkKeyPair: ec.KeyPair;
// }

export interface WalletConnection {
  ethSigner: EthSigner;
  starkSigner: StarkSigner;
}

export interface L1Configuration {
  coreContractAddress: string;
  registrationContractAddress: string;
  chainID: number;
}

export interface ImmutableXConfiguration {
  apiConfiguration: APIConfiguration;
  l1Configuration: L1Configuration;
}

export type UnsignedMintRequest = Omit<MintRequest, 'auth_signature'>;
export type UnsignedTransferRequest = GetSignableTransferRequestV1;
export type UnsignedBatchNftTransferRequest = GetSignableTransferRequest;
export type UnsignedBurnRequest = GetSignableBurnRequest;

export * from './deposit';
export * from './withdrawal';
export * from './token';
export * from './signable-withdrawal';

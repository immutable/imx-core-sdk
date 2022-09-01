import {
  MintRequest,
  GetSignableTransferRequestV1,
  Configuration as APIConfiguration,
} from '../api';
import { Signer as EthSigner } from '@ethersproject/abstract-signer';

export { EthSigner };

export interface StarkSigner {
  signMessage(message: string): Promise<string>;
  getAddress(): string | Promise<string>;
}

export type L2Signer = StarkSigner;

export interface WalletConnection {
  ethSigner: EthSigner;
  starkSigner: StarkSigner;
}

export interface EthConfiguration {
  coreContractAddress: string;
  registrationContractAddress: string;
  chainID: number;
}

export interface ImmutableXConfiguration {
  apiConfiguration: APIConfiguration;
  ethConfiguration: EthConfiguration;
}

export type UnsignedMintRequest = Omit<MintRequest, 'auth_signature'>;
export type UnsignedTransferRequest = GetSignableTransferRequestV1;

export * from './deposit';
export * from './withdrawal';
export * from './signable-withdrawal';

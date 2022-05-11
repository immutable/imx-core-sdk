import { ec } from 'elliptic';
import { MintRequest, GetSignableTransferRequestV1, GetSignableTransferRequest } from "../api";

export interface StarkWallet {
    starkPublicKey: string;
    starkKeyPair: ec.KeyPair;
}

export type UnsignedMintRequest = Omit<MintRequest, "auth_signature">
export type UnsignedTransferRequest = GetSignableTransferRequestV1
export type UnsignedBatchNftTransferRequest = GetSignableTransferRequest
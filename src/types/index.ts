import { ec } from 'elliptic';
import { MintRequest } from "../api";

export interface StarkWallet {
    starkPublicKey: string;
    starkKeyPair: ec.KeyPair;
}

export type UnsignedMintRequest = Omit<MintRequest, "auth_signature">
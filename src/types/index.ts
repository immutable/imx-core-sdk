import { ec } from 'elliptic';

export interface StarkWallet {
    starkPublicKey: string;
    starkKeyPair: ec.KeyPair;
}
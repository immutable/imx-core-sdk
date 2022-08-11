import { grindKey } from '../crypto/crypto';
import { hdkey } from 'ethereumjs-wallet';
import * as encUtils from 'enc-utils';
import { ec } from 'elliptic';
import { splitSignature } from '@ethersproject/bytes';
import { Signer } from '@ethersproject/abstract-signer';
import { StarkWallet } from '../../types';
import starkwareCrypto from '@starkware-industries/starkware-crypto-utils';

const DEFAULT_SIGNATURE_MESSAGE =
  'Only sign this request if you’ve initiated an action with Immutable X.';

const DEFAULT_ACCOUNT_APPLICATION = 'immutablex';
const DEFAULT_ACCOUNT_LAYER = 'starkex';
const DEFAULT_ACCOUNT_INDEX = '1';

export function getKeyPair(privateKey: string): ec.KeyPair {
  return starkwareCrypto.ec.keyFromPrivate(privateKey, 'hex');
}

export function getKeyPairFromPath(seed: string, path: string): ec.KeyPair {
  const privateKey = hdkey
    .fromMasterSeed(Buffer.from(seed.slice(2), 'hex')) // assuming seed is '0x...'
    .derivePath(path)
    .getWallet()
    .getPrivateKeyString();
  return getKeyPair(grindKey(privateKey));
}

export function getPublic(keyPair: ec.KeyPair, compressed = false): string {
  return keyPair.getPublic(compressed, 'hex');
}

export function getXCoordinate(publicKey: string): string {
  const keyPair = starkwareCrypto.ec.keyFromPublic(encUtils.hexToArray(publicKey));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return encUtils.sanitizeBytes((keyPair as any).pub.getX().toString(16), 2);
}

function getStarkPublicKey(keyPair: ec.KeyPair): string {
  return encUtils.sanitizeHex(getXCoordinate(getPublic(keyPair, true)));
}

export async function generateStarkWalletFromSignedMessage(
  ethAddress: string,
  signature: string,
): Promise<StarkWallet> {
  const path = starkwareCrypto.keyDerivation.getAccountPath(
    DEFAULT_ACCOUNT_LAYER,
    DEFAULT_ACCOUNT_APPLICATION,
    ethAddress,
    DEFAULT_ACCOUNT_INDEX,
  );
  const keyPair = getKeyPairFromPath(splitSignature(signature).s, path);
  const starkPublicKey = getStarkPublicKey(keyPair);
  return {
    path,
    starkPublicKey,
    starkKeyPair: keyPair,
  };
}

export async function generateStarkWallet(
  signer: Signer,
): Promise<StarkWallet> {
  const ethAddress = (await signer.getAddress()).toLowerCase();
  const signature = await signer.signMessage(DEFAULT_SIGNATURE_MESSAGE);
  return generateStarkWalletFromSignedMessage(ethAddress, signature);
}

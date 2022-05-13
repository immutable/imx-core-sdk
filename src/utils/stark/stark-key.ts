import { getIntFromBits } from './stark-curve';
import hashJS from 'hash.js';
import { grindKey } from '../crypto/crypto';
import { hdkey } from 'ethereumjs-wallet';
import { curves, ec as Ec } from 'elliptic';
import BN from 'bn.js';
import { constantPointsHex } from './points';
import * as encUtils from 'enc-utils';
import { ec } from 'elliptic';
import { splitSignature } from 'ethers/lib/utils';
import { Signer } from '@ethersproject/abstract-signer';
import { StarkWallet } from '../../types';

const DEFAULT_SIGNATURE_MESSAGE =
  'Only sign this request if you’ve initiated an action with Immutable X.';

const DEFAULT_ACCOUNT_APPLICATION = 'immutablex';
const DEFAULT_ACCOUNT_LAYER = 'starkex';
const DEFAULT_ACCOUNT_INDEX = '1';

const prime = new BN(
  '800000000000011000000000000000000000000000000000000000000000001',
  16,
);
const order = new BN(
  '08000000 00000010 ffffffff ffffffff b781126d cae7b232 1e66a241 adc64d2f',
  16,
);

export function getAccountPath(
  layer: string,
  application: string,
  ethereumAddress: string,
  index: string,
): string {
  const layerHash = hashJS.sha256().update(layer).digest('hex');
  const applicationHash = hashJS.sha256().update(application).digest('hex');
  const layerInt = getIntFromBits(layerHash, -31);
  const applicationInt = getIntFromBits(applicationHash, -31);
  const ethAddressInt1 = getIntFromBits(ethereumAddress, -31);
  const ethAddressInt2 = getIntFromBits(ethereumAddress, -62, -31);
  return `m/2645'/${layerInt}'/${applicationInt}'/${ethAddressInt1}'/${ethAddressInt2}'/${index}`;
}

export function getKeyPairFromPath(seed: string, path: string): ec.KeyPair {
  const privateKey = hdkey
    .fromMasterSeed(Buffer.from(seed.slice(2), 'hex')) // assuming seed is '0x...'
    .derivePath(path)
    .getWallet()
    .getPrivateKeyString();
  return getKeyPair(grindKey(privateKey));
}

const starkEc = new Ec(
  new curves.PresetCurve({
    type: 'short',
    prime: null,
    p: prime as any,
    a: '00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000001',
    b: '06f21413 efbe40de 150e596d 72f7a8c5 609ad26c 15c915c1 f4cdfcb9 9cee9e89',
    n: order as any,
    hash: hashJS.sha256,
    gRed: false,
    g: constantPointsHex[1],
  }),
);

export function getKeyPair(privateKey: string): ec.KeyPair {
  return starkEc.keyFromPrivate(privateKey, 'hex');
}
export function getPublic(keyPair: ec.KeyPair, compressed = false): string {
  return keyPair.getPublic(compressed, 'hex');
}

export function getStarkPublicKey(keyPair: ec.KeyPair): string {
  return getPublic(keyPair, true);
}

export function getKeyPairFromPublicKey(publicKey: string): ec.KeyPair {
  return starkEc.keyFromPublic(encUtils.hexToArray(publicKey));
}

export function getKeyPairFromPrivateKey(privateKey: string): ec.KeyPair {
  return starkEc.keyFromPrivate(privateKey, 'hex');
}

export function getXCoordinate(publicKey: string): string {
  const keyPair = getKeyPairFromPublicKey(publicKey);
  return encUtils.sanitizeBytes((keyPair as any).pub.getX().toString(16), 2);
}

export async function generateStarkWallet(
  signer: Signer,
): Promise<StarkWallet> {
  const ethAddress = (await signer.getAddress()).toLowerCase();
  const path = getAccountPath(
    DEFAULT_ACCOUNT_LAYER,
    DEFAULT_ACCOUNT_APPLICATION,
    ethAddress,
    DEFAULT_ACCOUNT_INDEX,
  );
  const signature = await signer.signMessage(DEFAULT_SIGNATURE_MESSAGE);
  const keyPair = getKeyPairFromPath(splitSignature(signature).s, path);
  const starkPublic = getStarkPublicKey(keyPair);
  return {
    starkPublicKey: encUtils.sanitizeHex(getXCoordinate(starkPublic)),
    starkKeyPair: keyPair,
  };
}

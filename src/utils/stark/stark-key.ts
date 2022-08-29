import { getIntFromBits } from './stark-curve';
import hashJS from 'hash.js';
import { grindKey } from '../crypto/crypto';
import { hdkey } from 'ethereumjs-wallet';
import { curves, ec as Ec } from 'elliptic';
import BN from 'bn.js';
import * as encUtils from 'enc-utils';
import { ec } from 'elliptic';
import { splitSignature } from '@ethersproject/bytes';
import { Signer } from '@ethersproject/abstract-signer';

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

const constantPointsHex = [
  [
    '49ee3eba8c1600700ee1b87eb599f16716b0b1022947733551fde4050ca6804',
    '3ca0cfe4b3bc6ddf346d49d06ea0ed34e621062c0e056c1d0405d266e10268a',
  ],
  [
    '1ef15c18599971b7beced415a40f0c7deacfd9b0d1819e03d723d8bc943cfca',
    '5668060aa49730b7be4801df46ec62de53ecd11abe43a32873000c36e8dc1f',
  ],
];

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

const starkEc = new Ec(
  new curves.PresetCurve({
    type: 'short',
    prime: null,
    p: prime as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    a: '00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000001',
    b: '06f21413 efbe40de 150e596d 72f7a8c5 609ad26c 15c915c1 f4cdfcb9 9cee9e89',
    n: order as any, // eslint-disable-line @typescript-eslint/no-explicit-any
    hash: hashJS.sha256,
    gRed: false,
    g: constantPointsHex[1],
  }),
);

export function getKeyPair(privateKey: string): ec.KeyPair {
  return starkEc.keyFromPrivate(privateKey, 'hex');
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
  const keyPair = starkEc.keyFromPublic(encUtils.hexToArray(publicKey));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return encUtils.sanitizeBytes((keyPair as any).pub.getX().toString(16), 2);
}

export function getStarkPublicKey(keyPair: ec.KeyPair): string {
  return encUtils.sanitizeHex(getXCoordinate(getPublic(keyPair, true)));
}

interface StarkWallet {
  path: string;
  starkPublicKey: string;
  starkKeyPair: ec.KeyPair;
}

export async function generateStarkWalletFromSignedMessage(
  ethAddress: string,
  signature: string,
): Promise<StarkWallet> {
  const path = getAccountPath(
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

/*
// random stark key
export function generateStarkPrivateKey(): string {

}

// user's reponsibilit to save and manage their private key
export async function generateStarkSigner(starkPrivateKey: string)
  : Promise<StarkWallet> {

}
*/

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
import { Errors } from '../../workflows/errors';

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

export interface StarkSigner {
  sign(msg: string): Promise<string>;
  publicKey(): Promise<string>;
}

export class BaseSigner implements StarkSigner {

    constructor(private keyPair: ec.KeyPair){}

    // TODO: the old implementation of this is extremely complex
    // We need to test that the simpler version works and why 
    // it was originally implemented that way
    public async publicKey(): Promise<string> {
        return this.keyPair.getPublic(true, 'hex');
    }

    public async sign(msg: string): Promise<string> {
        return this.serialize(this.keyPair.sign(fixMessage(msg)));
    }

    private serialize(sig: ec.Signature): string {
        return encUtils.addHexPrefix(
        encUtils.padLeft(sig.r.toString(16), 64) +
            encUtils.padLeft(sig.s.toString(16), 64),
        )
    }
}

export function fixMessage(msg: string) {
    msg = encUtils.removeHexPrefix(msg);
    msg = new BN(msg, 16).toString(16);
  
    if (msg.length <= 62) {
      // In this case, msg should not be transformed, as the byteLength() is at most 31,
      // so delta < 0 (see _truncateToN).
      return msg;
    }
    if (msg.length !== 63) {
      throw new Error(Errors.StarkCurveInvalidMessageLength);
    }
    // In this case delta will be 4 so we perform a shift-left of 4 bits by adding a ZERO_BN.
    return `${msg}0`;
  }

export function getKeyPair(privateKey: string): ec.KeyPair {
  return starkEc.keyFromPrivate(privateKey, 'hex');
}

export async function generateSignerFromL1Seed(signer: Signer): Promise<BaseSigner> {
  const ethAddress = (await signer.getAddress()).toLowerCase();
  const path = getAccountPath(
    DEFAULT_ACCOUNT_LAYER,
    DEFAULT_ACCOUNT_APPLICATION,
    ethAddress,
    DEFAULT_ACCOUNT_INDEX,
  );
  const signature = await signer.signMessage(DEFAULT_SIGNATURE_MESSAGE);
  const keyPair = getKeyPairFromPath(splitSignature(signature).s, path);
  return new BaseSigner(keyPair);
}

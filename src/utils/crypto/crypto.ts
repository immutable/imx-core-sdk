import BN from 'bn.js';
import * as encUtils from 'enc-utils';
import hashJS from 'hash.js';
import { Signer } from '@ethersproject/abstract-signer';
import {
  ORDER,
  SECP_ORDER,
} from './constants';

type SignatureOptions = {
    r: BN;
    s: BN;
    recoveryParam: number | null | undefined;
};

export function hashKeyWithIndex(key: string, index: number): BN {
  return new BN(
    hashJS
      .sha256()
      .update(
        encUtils.hexToBuffer(
          encUtils.removeHexPrefix(key) +
                    encUtils.sanitizeBytes(encUtils.numberToHex(index), 2),
        ),
      )
      .digest('hex'),
    16,
  );
}

export function grindKey(privateKey: string): string {
  let i = 0;
  let key: BN = hashKeyWithIndex(privateKey, i);

  while (!key.lt(SECP_ORDER.sub(SECP_ORDER.mod(ORDER)))) {
    key = hashKeyWithIndex(key.toString(16), i);
    i = i++;
  }
  return key.mod(ORDER).toString('hex');
}



// used to sign message with L1 keys. Used for registration
export function serializeEthSignature(sig: SignatureOptions): string {
  // This is because golang appends a recovery param
  // https://github.com/ethers-io/ethers.js/issues/823
  return encUtils.addHexPrefix(
    encUtils.padLeft(sig.r.toString(16), 64) +
        encUtils.padLeft(sig.s.toString(16), 64) +
        encUtils.padLeft(sig.recoveryParam?.toString(16) || '', 2),
  );
}

export function importRecoveryParam(v: string): number | undefined {
  return v.trim()
    ? new BN(v, 16).cmp(new BN(27)) !== -1
      ? new BN(v, 16).sub(new BN(27)).toNumber()
      : new BN(v, 16).toNumber()
    : undefined;
}

// used chained with serializeEthSignature. serializeEthSignature(deserializeSignature(...))
export function deserializeSignature(sig: string, size = 64): SignatureOptions {
  sig = encUtils.removeHexPrefix(sig);
  return {
    r: new BN(sig.substring(0, size), 'hex'),
    s: new BN(sig.substring(size, size * 2), 'hex'),
    recoveryParam: importRecoveryParam(sig.substring(size * 2, size * 2 + 2)),
  };
}

export async function signRaw(
  payload: string,
  signer: Signer,
): Promise<string> {
  const signature = deserializeSignature(await signer.signMessage(payload));
  return serializeEthSignature(signature);
}

export async function signMessage(
  message: string,
  signer: Signer,
): Promise<{message: string, ethAddress: string, ethSignature: string}> {
  const ethAddress = await signer.getAddress()
  const ethSignature = await signRaw(message, signer)
  return {
    message,
    ethAddress,
    ethSignature,
  };
}
import { ec } from 'elliptic';
import * as encUtils from 'enc-utils';
import { StarkSigner } from '../../types';
import { starkEc } from './stark-curve';
import { getStarkPublicKey } from './stark-curve';
import BN from 'bn.js';
import { Errors } from '../../workflows/errors';

class StandardStarkSigner implements StarkSigner {
  constructor(private keyPair: ec.KeyPair) {}

  public getAddress(): string {
    return getStarkPublicKey(this.keyPair);
  }

  public async signMessage(msg: string): Promise<string> {
    return this.serialize(this.keyPair.sign(this.fixMessage(msg)));
  }

  private serialize(sig: ec.Signature): string {
    return encUtils.addHexPrefix(
      encUtils.padLeft(sig.r.toString(16), 64) +
        encUtils.padLeft(sig.s.toString(16), 64),
    );
  }

  private fixMessage(msg: string) {
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
}

export function createStarkSigner(privateKey: string): StarkSigner {
  const keyPair = starkEc.keyFromPrivate(privateKey, 'hex');
  return new StandardStarkSigner(keyPair);
}

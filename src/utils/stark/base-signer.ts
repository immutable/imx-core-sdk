import BN from 'bn.js';
import { ec } from 'elliptic';
import * as encUtils from 'enc-utils';
import { L2Signer } from '../../types';
import { Errors } from '../../workflows/errors';
import { getXCoordinate } from './stark-key';

export class BaseSigner implements L2Signer {
  constructor(private keyPair: ec.KeyPair) {}

  public getAddress(): string {
    return encUtils.sanitizeHex(getXCoordinate(this.keyPair.getPublic(true, 'hex')));
  }

  public async signMessage(msg: string): Promise<string> {
    return this.serialize(this.keyPair.sign(this.fixMessage(msg)));
  }

  private fixMessage(msg: string): string {
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

  private serialize(sig: ec.Signature): string {
    return encUtils.addHexPrefix(
      encUtils.padLeft(sig.r.toString(16), 64) +
        encUtils.padLeft(sig.s.toString(16), 64),
    );
  }
}

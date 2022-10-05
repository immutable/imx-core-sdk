import { ec } from 'elliptic';
import * as encUtils from 'enc-utils';
import { StarkSigner } from '../../types';
import { starkEc } from './starkCurve';
import BN from 'bn.js';
import { Errors } from '../../workflows/errors';

export class StandardStarkSigner implements StarkSigner {
  private keyPair: ec.KeyPair;

  constructor(private privateKey: string) {
    this.keyPair = starkEc.keyFromPrivate(privateKey, 'hex');
  }

  public getAddress(): string {
    const xCoordinate = this.keyPair.getPublic().getX().toString('hex');
    return encUtils.sanitizeHex(xCoordinate);
  }

  public async signMessage(msg: string): Promise<string> {
    return this.serialize(this.keyPair.sign(this.fixMsgHashLen(msg)));
  }

  private serialize(sig: ec.Signature): string {
    return encUtils.addHexPrefix(
      encUtils.padLeft(sig.r.toString('hex'), 64) +
        encUtils.padLeft(sig.s.toString('hex'), 64),
    );
  }

  /*
 The function _truncateToN in lib/elliptic/ec/index.js does a shift-right of delta bits,
 if delta is positive, where
   delta = msgHash.byteLength() * 8 - starkEx.n.bitLength().
 This function does the opposite operation so that
   _truncateToN(fixMsgHashLen(msgHash)) == msgHash.
*/
  private fixMsgHashLen(msg: string) {
    msg = encUtils.removeHexPrefix(msg);
    msg = new BN(msg, 'hex').toString('hex');

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

/**
 * Creates a new Stark Signer
 * @params starkPrivateKey - the private key as a hex string
 * @returns a StarkSigner
 */
export function createStarkSigner(starkPrivateKey: string): StarkSigner {
  return new StandardStarkSigner(starkPrivateKey);
}

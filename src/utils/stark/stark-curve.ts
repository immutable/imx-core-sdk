import * as encUtils from 'enc-utils';
import BN from 'bn.js';
import { Errors } from '../../workflows/errors';

export function getIntFromBits(
  hex: string,
  start: number,
  end: number | undefined = undefined,
): number {
  const bin = encUtils.hexToBinary(hex);
  const bits = bin.slice(start, end);
  const int = encUtils.binaryToNumber(bits);
  return int;
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

import * as encUtils from 'enc-utils';

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


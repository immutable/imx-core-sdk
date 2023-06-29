import BN from 'bn.js';
import { curves, ec as Ec } from 'elliptic';
import hashJS from 'hash.js';

import { constantPointsHex } from './points';
import { Instruction, InstructionWithFee } from './types';

const DEFAULT_ACCOUNT_MAPPING_KEY = 'STARKWARE_ACCOUNT_MAPPING';
const DEFAULT_SIGNATURE_MESSAGE =
  'Only sign this request if you’ve initiated an action with Immutable X.';

const DEFAULT_ACCOUNT_LAYER = 'starkex';
const DEFAULT_ACCOUNT_APPLICATION = 'immutablex';
const DEFAULT_ACCOUNT_INDEX = '1';

const NFT_ASSET_ID_PREFIX = 'NFT:';
const MINTABLE_ASSET_ID_PREFIX = 'MINTABLE:';

const prime = new BN(
  '800000000000011000000000000000000000000000000000000000000000001',
  16,
);
const order = new BN(
  '08000000 00000010 ffffffff ffffffff b781126d cae7b232 1e66a241 adc64d2f',
  16,
);

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

const constantPoints = constantPointsHex.map((coords: string[]) =>
  starkEc.curve.point(new BN(coords[0], 16), new BN(coords[1], 16)),
);
const shiftPoint = constantPoints[0];

// Instruction type mapping encoded in BigNumber
// see https://docs.starkware.co/starkex-v3/starkex-deep-dive/message-encodings/signatures
const instructionEncodingMap: {
  [instruction in Instruction | InstructionWithFee]: BN;
} = {
  order: new BN('0'),
  transfer: new BN('1'),
  orderWithFee: new BN('3'),
  transferWithFee: new BN('4'),
  registerUser: new BN('1000'),
  deposit: new BN('1001'),
  withdraw: new BN('1002'),
  cancelOrder: new BN('1003'),
};

const ZERO_BN = new BN('0');
const ONE_BN = new BN('1');
const TWO_POW_22_BN = new BN('400000', 16);
const TWO_POW_31_BN = new BN('80000000', 16);
const TWO_POW_63_BN = new BN('8000000000000000', 16);
// Equals 2**251 + 17 * 2**192 + 1.
const PRIME_BN = new BN(
  '800000000000011000000000000000000000000000000000000000000000001',
  16,
);
// Equals 2**251. This value limits msgHash and the signature parts.
const MAX_ECDSA_BN = new BN(
  '800000000000000000000000000000000000000000000000000000000000000',
  16,
);

const MISSING_HEX_PREFIX = 'Hex strings expected to be prefixed with 0x.';

const ORDER = new BN(
  '08000000 00000010 ffffffff ffffffff b781126d cae7b232 1e66a241 adc64d2f',
  16,
);
const SECP_ORDER = new BN(
  'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE BAAEDCE6 AF48A03B BFD25E8C D0364141',
  16,
);

export {
  constantPoints,
  DEFAULT_ACCOUNT_APPLICATION,
  DEFAULT_ACCOUNT_INDEX,
  DEFAULT_ACCOUNT_LAYER,
  DEFAULT_ACCOUNT_MAPPING_KEY,
  DEFAULT_SIGNATURE_MESSAGE,
  instructionEncodingMap,
  MAX_ECDSA_BN,
  MINTABLE_ASSET_ID_PREFIX,
  MISSING_HEX_PREFIX,
  NFT_ASSET_ID_PREFIX,
  ONE_BN,
  ORDER,
  prime,
  PRIME_BN,
  SECP_ORDER,
  shiftPoint,
  starkEc,
  TWO_POW_22_BN,
  TWO_POW_31_BN,
  TWO_POW_63_BN,
  ZERO_BN,
};

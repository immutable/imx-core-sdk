import BN from 'bn.js';

const ORDER = new BN(
  '08000000 00000010 ffffffff ffffffff b781126d cae7b232 1e66a241 adc64d2f',
  16,
);

const SECP_ORDER = new BN(
  'FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE BAAEDCE6 AF48A03B BFD25E8C D0364141',
  16,
);

export {
  ORDER,
  SECP_ORDER,
};

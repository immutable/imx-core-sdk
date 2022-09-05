import * as encUtils from 'enc-utils';
import BN from 'bn.js';
import { Errors } from '../../workflows/errors';
import hashJS from 'hash.js';
import { curves, ec } from 'elliptic';

/* 
Stark-friendly elliptic curve

The Stark-friendly elliptic curve used is defined as follows:

`y² ≡ x³ + α ⋅ x + β(modp)`

where:

```
α = 1
β = 3141592653589793238462643383279502884197169399375105820974944592307816406665
p = 3618502788666131213697322783095070105623107215331596699973092056135872020481
 = 2²⁵¹ + 17 ⋅ 2¹⁹² + 1
```

The Generator point used in the ECDSA scheme is:
```
G = (874739451078007766457464989774322083649278607533249481151382481072868806602,
  152666792071518830868575557812948353041420400780739481342941381225525861407)
```
https://docs.starkware.co/starkex-v4/crypto/stark-curve
*/

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

export const starkEc = new ec(
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

function getXCoordinate(publicKey: string): string {
  const keyPair = starkEc.keyFromPublic(encUtils.hexToArray(publicKey));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return encUtils.sanitizeBytes((keyPair as any).pub.getX().toString(16), 2);
}

export function getStarkPublicKey(keyPair: ec.KeyPair): string {
  const pub = keyPair.getPublic(true, 'hex');
  return encUtils.sanitizeHex(getXCoordinate(pub));
}

// Generates a new private key on the Stark-friendly elliptic curve.
export function generatePrivateKey(): string {
  const keyPair = starkEc.genKeyPair();
  return keyPair.getPrivate('hex');
}

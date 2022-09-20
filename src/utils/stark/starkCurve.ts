import hash from 'hash.js';
import { curves, ec } from 'elliptic';
import * as encUtils from 'enc-utils';
import BN from 'bn.js';

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

export const starkEcOrder = new BN(
  '08000000 00000010 ffffffff ffffffff b781126d cae7b232 1e66a241 adc64d2f',
  16,
);

export const starkEc = new ec(
  new curves.PresetCurve({
    type: 'short',
    prime: null,
    p: '08000000 00000011 00000000 00000000 00000000 00000000 00000000 00000001',
    a: '00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000001',
    b: '06f21413 efbe40de 150e596d 72f7a8c5 609ad26c 15c915c1 f4cdfcb9 9cee9e89',
    n: starkEcOrder.toString('hex'),
    hash: hash.sha256,
    gRed: false,
    g: [
      '1ef15c18599971b7beced415a40f0c7deacfd9b0d1819e03d723d8bc943cfca',
      '5668060aa49730b7be4801df46ec62de53ecd11abe43a32873000c36e8dc1f',
    ],
  }),
);

// Create a hash from a key + an index
function hashKeyWithIndex(key: string, index: number): BN {
  return new BN(
    hash
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

/*
 This function receives a key seed and produces an appropriate StarkEx key from a uniform
 distribution.
 Although it is possible to define a StarkEx key as a residue between the StarkEx EC order and a
 random 256bit digest value, the result would be a biased key. In order to prevent this bias, we
 deterministically search (by applying more hashes, AKA grinding) for a value lower than the largest
 256bit multiple of StarkEx EC order.

 https://github.com/starkware-libs/starkware-crypto-utils/blob/dev/src/js/key_derivation.js#L119
*/
export function grindKey(keySeed: BN, keyValLimit: BN) {
  const sha256EcMaxDigest = new BN(
    '1 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000',
    16,
  );
  const maxAllowedVal = sha256EcMaxDigest.sub(
    sha256EcMaxDigest.mod(keyValLimit),
  );
  let key = hashKeyWithIndex(keySeed.toString('hex'), 0);
  // Make sure the produced key is devided by the Stark EC order, and falls within the range
  // [0, maxAllowedVal).
  for (let i = 1; key.gte(maxAllowedVal); i++) {
    key = hashKeyWithIndex(key.toString('hex'), i);
  }
  return key.umod(keyValLimit).toString('hex');
}

/**
 * Generates a new Stark private key
 * @returns the private key as a hex string
 */
export function generateStarkPrivateKey(): string {
  const keyPair = starkEc.genKeyPair();
  return grindKey(keyPair.getPrivate(), starkEcOrder);
}

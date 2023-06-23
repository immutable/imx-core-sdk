import hash from 'hash.js';
import { curves, ec } from 'elliptic';
import * as encUtils from 'enc-utils';
import BN from 'bn.js';
import { Signer } from '@ethersproject/abstract-signer';
import { splitSignature } from '@ethersproject/bytes';
import { hdkey } from 'ethereumjs-wallet';
import { ImmutableX } from '../../ImmutableX';
import { createStarkSigner } from './starkSigner';
import { IMXError } from '../../types/errors';

const DEFAULT_SIGNATURE_MESSAGE =
  'Only sign this request if you’ve initiated an action with Immutable X.';
const DEFAULT_ACCOUNT_APPLICATION = 'immutablex';
const DEFAULT_ACCOUNT_LAYER = 'starkex';
const DEFAULT_ACCOUNT_INDEX = '1';

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

//////////////////////////////////////////////////////////////////////////////////////////////////
// DANGER: DO NOT MODIFY GRIND KEY / KEY GENERATION LOGIC.
//////////////////////////////////////////////////////////////////////////////////////////////////
/*
 This function receives a key seed and produces an appropriate StarkEx key from a uniform
 distribution.
 Although it is possible to define a StarkEx key as a residue between the StarkEx EC order and a
 random 256bit digest value, the result would be a biased key. In order to prevent this bias, we
 deterministically search (by applying more hashes, AKA grinding) for a value lower than the largest
 256bit multiple of StarkEx EC order.

 https://github.com/starkware-libs/starkware-crypto-utils/blob/dev/src/js/key_derivation.js#L119
*/
export function grindKey(
  keySeed: BN,
  keyValLimit: BN,
): { starkPrivateKey: string; accountMatchCheckRequired: boolean } {
  const sha256EcMaxDigest = new BN(
    '1 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000',
    16,
  );
  const maxAllowedVal = sha256EcMaxDigest.sub(
    sha256EcMaxDigest.mod(keyValLimit),
  );
  // The key passed to hashKeyWithIndex must have a length of 64 characters
  // to ensure that the correct number of leading zeroes are used as input
  // to the hashing loop
  let key = hashKeyWithIndex(keySeed.toString('hex', 64), 0);
  // Make sure the produced key is devided by the Stark EC order, and falls within the range
  // [0, maxAllowedVal).
  let accountMatchCheckRequired = false;
  for (let i = 0; key.gte(maxAllowedVal); i++) {
    accountMatchCheckRequired = true;
    key = hashKeyWithIndex(key.toString('hex'), i);
  }
  const starkPrivateKey = key.umod(keyValLimit).toString('hex');
  return { starkPrivateKey, accountMatchCheckRequired };
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// DANGER: DO NOT MODIFY GRIND KEY / KEY GENERATION LOGIC.
//////////////////////////////////////////////////////////////////////////////////////////////////
/*
The grindKeyV1 function introduced an alternate logic to the one in imx-sdk-js as part of this commit.
https://github.com/immutable/imx-core-sdk/commit/3d9e35b4598784589bd7f121f26e105493196716

Some of the accounts that has been created since 1.0.0-beta.2 release may have an issue to regenerate their stark keys
from the given l1signer. This function is retained to provide a way for those users to get their stark keys.

For most users the above `grindKey` function should work correctly, only use `grindKeyV1` if the other one fails.

Note: The issue we are addressing here is that if the hashKeyWithIndex value is above the limit, then we perform 
      hash again with index until it comes below the limit. But for the first time the index is not incriminated in 
      imx-sdk-js where as it was in core-sdk that was the difference. For this reason it would have worked for cases 
      where the hashed value was less than the limit and fails only when it is above the limit.
      Refer, https://immutable.atlassian.net/browse/DX-2167
*/
export function grindKeyV1(keySeed: BN, keyValLimit: BN) {
  const sha256EcMaxDigest = new BN(
    '1 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000',
    16,
  );
  const maxAllowedVal = sha256EcMaxDigest.sub(
    sha256EcMaxDigest.mod(keyValLimit),
  );
  // The key passed to hashKeyWithIndex must have a length of 64 characters
  // to ensure that the correct number of leading zeroes are used as input
  // to the hashing loop
  let key = hashKeyWithIndex(keySeed.toString('hex', 64), 0);
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
  // These are/will always be new accounts no need to check.
  return grindKey(keyPair.getPrivate(), starkEcOrder).starkPrivateKey;
}

function getIntFromBits(
  hex: string,
  start: number,
  end: number | undefined = undefined,
): number {
  const bin = encUtils.hexToBinary(hex);
  const bits = bin.slice(start, end);
  const int = encUtils.binaryToNumber(bits);
  return int;
}

function getAccountPath(
  layer: string,
  application: string,
  ethereumAddress: string,
  index: string,
): string {
  const layerHash = hash.sha256().update(layer).digest('hex');
  const applicationHash = hash.sha256().update(application).digest('hex');
  const layerInt = getIntFromBits(layerHash, -31);
  const applicationInt = getIntFromBits(applicationHash, -31);
  const ethAddressInt1 = getIntFromBits(ethereumAddress, -31);
  const ethAddressInt2 = getIntFromBits(ethereumAddress, -62, -31);
  return `m/2645'/${layerInt}'/${applicationInt}'/${ethAddressInt1}'/${ethAddressInt2}'/${index}`;
}

async function checkStarkPublicKeyMatches(
  starkPrivateKey: string,
  imxClient?: ImmutableX,
  ethAddress?: string,
): Promise<boolean> {
  try {
    // Check if the generated stark public key matches with the existing account value for that user.
    if (imxClient && ethAddress) {
      const user = await imxClient.getUser(ethAddress);
      if (user.accounts.length > 0) {
        const starkSigner = createStarkSigner(starkPrivateKey);
        return user.accounts[0] == starkSigner.getAddress();
      }
    }
  } catch (err) {
    if (err instanceof IMXError && err.code == 'account_not_found') {
      return true; // This means a new account. So lets use the default GrindKey logic.
    }
  }
  return false;
}

async function getKeyFromPath(
  seed: string,
  path: string,
  imxClient?: ImmutableX,
  ethAddress?: string,
): Promise<string> {
  const privateKey = hdkey
    .fromMasterSeed(Buffer.from(seed.slice(2), 'hex')) // assuming seed is '0x...'
    .derivePath(path)
    .getWallet()
    .getPrivateKey();

  const res = grindKey(new BN(privateKey), starkEcOrder);
  if (res.accountMatchCheckRequired) {
    // Check if the generated stark public key matches with the existing account value for that user.
    if (
      (await checkStarkPublicKeyMatches(
        res.starkPrivateKey,
        imxClient,
        ethAddress,
      )) != true
    ) {
      const starkPrivateKeyAlt = grindKeyV1(new BN(privateKey), starkEcOrder);
      if (
        await checkStarkPublicKeyMatches(
          starkPrivateKeyAlt,
          imxClient,
          ethAddress,
        )
      ) {
        res.starkPrivateKey = starkPrivateKeyAlt;
      }
    }
  }
  return res.starkPrivateKey;
}

/**
 * Generates a deterministic Stark private key from the provided signer.
 * @returns the private key as a hex string
 */
export async function generateLegacyStarkPrivateKey(
  signer: Signer,
  imxClient?: ImmutableX,
): Promise<string> {
  const address = (await signer.getAddress()).toLowerCase();
  const signature = await signer.signMessage(DEFAULT_SIGNATURE_MESSAGE);
  const seed = splitSignature(signature).s;
  const path = getAccountPath(
    DEFAULT_ACCOUNT_LAYER,
    DEFAULT_ACCOUNT_APPLICATION,
    address,
    DEFAULT_ACCOUNT_INDEX,
  );
  const key = await getKeyFromPath(seed, path, imxClient, address);
  return key.padStart(64, '0');
}

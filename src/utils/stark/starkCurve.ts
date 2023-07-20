import { Signer } from '@ethersproject/abstract-signer';
import { splitSignature } from '@ethersproject/bytes';
import * as legacy from './legacy/crypto';
import { createStarkSigner } from './starkSigner';
import hash from 'hash.js';
import { curves, ec } from 'elliptic';
import * as encUtils from 'enc-utils';
import BN from 'bn.js';
import { hdkey } from 'ethereumjs-wallet';
import { ImmutableX } from '../../ImmutableX';
import { IMXError } from '../../types/errors';
import { Config } from '../../config/config';

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

const MAX_ALLOWED_VAL = () => {
  const sha256EcMaxDigest = new BN(
    '1 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000',
    16,
  );
  return sha256EcMaxDigest.sub(sha256EcMaxDigest.mod(starkEcOrder));
};

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
The grindKeyV201 function is used to provide a backwards compatible way to re-generate keys if any of the accounts were created using v2.0.1 of core-sdk.
*/
export function grindKeyV201(keySeed: BN): string {
  const maxAllowedVal = MAX_ALLOWED_VAL();

  // The key passed to hashKeyWithIndex must have a length of 64 characters
  // to ensure that the correct number of leading zeroes are used as input
  // to the hashing loop
  let key = hashKeyWithIndex(keySeed.toString('hex', 64), 0);

  // Make sure the produced key is devided by the Stark EC order, and falls within the range
  // [0, maxAllowedVal).
  for (let i = 0; key.gte(maxAllowedVal); i++) {
    key = hashKeyWithIndex(key.toString('hex'), i);
  }
  return key.umod(starkEcOrder).toString('hex');
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// DANGER: DO NOT MODIFY GRIND KEY / KEY GENERATION LOGIC.
//////////////////////////////////////////////////////////////////////////////////////////////////
/*
This grindKey function is the default logic to be used by all our SDKs including the imx-sdk-js. All the accounts 
that were created using imx-sdk-js are to be supported by the legacy.grindKey function.

This function receives a key seed and produces an appropriate StarkEx key from a uniform
distribution. 

Although it is possible to define a StarkEx key as a residue between the StarkEx EC order and a
random 256bit digest value, the result would be a biased key. In order to prevent this bias, we
deterministically search (by applying more hashes, AKA grinding) for a value lower than the largest
256bit multiple of StarkEx EC order.

https://github.com/starkware-libs/starkware-crypto-utils/blob/dev/src/js/key_derivation.js#L119

The accounts that has been created with versions released between 1.0.0-beta.3 and 2.0.0 are fine as it uses this method. 
Although this logic has been in place in core-sdk since the following commit, it was momentarily changed in version 2.0.1 to use gringKeyV201 method.
https://github.com/immutable/imx-core-sdk/commit/3d9e35b4598784589bd7f121f26e105493196716
*/
export function grindKey(keySeed: BN) {
  const maxAllowedVal = MAX_ALLOWED_VAL();
  // The key passed to hashKeyWithIndex must have a length of 64 characters
  // to ensure that the correct number of leading zeroes are used as input
  // to the hashing loop
  let key = hashKeyWithIndex(keySeed.toString('hex', 64), 0);

  // Make sure the produced key is devided by the Stark EC order, and falls within the range
  // [0, maxAllowedVal).
  for (let i = 1; key.gte(maxAllowedVal); i++) {
    key = hashKeyWithIndex(key.toString('hex'), i);
  }
  return key.umod(starkEcOrder).toString('hex');
}

// Check if the hash value of the the given PrivateKey falls above the starkEcOrder limit.
// This function is only serving the context of DX-2184, used to determine if we need to validate the generated key
// against the one recorded in IMX servers.
export function checkIfHashedKeyIsAboveLimit(keySeed: BN) {
  const maxAllowedVal = MAX_ALLOWED_VAL();
  // The key passed to hashKeyWithIndex must have a length of 64 characters
  // to ensure that the correct number of leading zeroes are used as input
  // to the hashing loop
  const key = hashKeyWithIndex(keySeed.toString('hex', 64), 0);
  return key.gte(maxAllowedVal);
}

// Gets the account (stark public key) value of the requested user (ethAddress) for Production environment only.
export async function getStarkPublicKeyFromImx(
  ethAddress: string,
): Promise<{ starkPublicKey: string; accountNotFound: boolean } | undefined> {
  try {
    const imxClient = new ImmutableX(Config.PRODUCTION);
    // Query existing account value for the given user (ethAddress).
    const user = await imxClient.getUser(ethAddress);
    if (user.accounts.length > 0) {
      return { starkPublicKey: user.accounts[0], accountNotFound: false };
    }
  } catch (err) {
    if (err instanceof IMXError && err.code == 'account_not_found') {
      return { starkPublicKey: '', accountNotFound: true }; // This means a new account. So lets use the value from default GrindKey function.
    }
    throw err;
  }
}

export function getPrivateKeyFromPath(seed: string, path: string): BN {
  const privateKey = hdkey
    .fromMasterSeed(Buffer.from(seed.slice(2), 'hex')) // assuming seed is '0x...'
    .derivePath(path)
    .getWallet()
    .getPrivateKey();
  return new BN(privateKey);
}

async function getKeyFromPath(
  seed: string,
  path: string,
  ethAddress: string,
): Promise<string> {
  const privateKeySeed = getPrivateKeyFromPath(seed, path);
  const starkPrivateKey = grindKey(privateKeySeed);

  // The following logic is added in response to bug found in DX-2167 and DX-2184.
  // To provide a backwards compatible way to fetch keys across link/js SDK and Core SDK.

  // Note: The issue we are addressing here is that if the hashKeyWithIndex value is above the limit, then we perform
  //     hash again with index until it comes below the limit. But for the first time the index is not incremented in
  //     imx-sdk-js where as it was in core-sdk that was the difference. For this reason it would have worked for cases
  //     where the hashed value was less than the limit and fails only when it is above the limit.
  //     Refer, https://immutable.atlassian.net/browse/DX-2167

  // Same code as grindKey, required to check if the generated private key
  // goes above the limit when hashed for first time to identify if we need to do backwards
  // compatibility check:

  // The bug only exists if the hashed value of given seed is above the stark curve limit.
  if (!checkIfHashedKeyIsAboveLimit(privateKeySeed)) {
    return starkPrivateKey;
  }

  // Check if the generated stark public key matches with the existing account value for that user.
  // We are only validating for Production environment.
  // For Sandbox account/key mismatch, solution is to discard the old account and create a new one.
  const imxResponse = await getStarkPublicKeyFromImx(ethAddress);
  // If the account is not found or account matches we just return the key pair at the end of this method.
  // Only need to so alternative method if the account is found but the stark public key does not match.

  // If the account is not found it is a new account, just return the Stark Private Key that is generated by grindKey function.
  if (imxResponse?.accountNotFound) {
    return starkPrivateKey;
  }

  // If the user account matches with generated stark public key user, just return Stark Private Key.
  if (
    imxResponse?.starkPublicKey ===
    createStarkSigner(starkPrivateKey).getAddress()
  ) {
    return starkPrivateKey;
  }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // This is backwards compatible crypto (core-sdk) version 2.0.1

  // If we are here, we found the account but did not match with the recorded user account.
  // Lets try to use grindKeyV201 method from backwards compatible logic to generate a key and see if that matches.
  const starkPrivateKeyV201Compatible = grindKeyV201(privateKeySeed);
  if (
    imxResponse?.starkPublicKey ===
    createStarkSigner(starkPrivateKeyV201Compatible).getAddress()
  ) {
    return starkPrivateKeyV201Compatible;
  }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // This section is legacy crypto, compatible with imx-sdk-js released before 1.43.5

  const privateKeyString = legacy.getPrivateKeyFromPath(seed, path);
  const starkPrivateKeyLegacy = legacy.grindKey(privateKeyString);

  if (
    imxResponse?.starkPublicKey ===
    createStarkSigner(starkPrivateKeyLegacy).getAddress()
  ) {
    return starkPrivateKeyLegacy;
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // Account is found, but did not match with stark public keys generated by either grindKey or grindKeyV1 method.
  // Will have to contact support for further investigation.
  throw new Error(
    'Can not deterministically generate stark private key - please contact support',
  );
}

/**
 * Generates a new Stark private key
 * @returns the private key as a hex string
 */
export function generateStarkPrivateKey(): string {
  const keyPair = legacy.starkEc.genKeyPair();
  return legacy.grindKey(keyPair.getPrivate('hex'));
}

/**
 * Generates a deterministic Stark private key from the provided signer.
 * @returns the private key as a hex string
 */
export async function generateLegacyStarkPrivateKey(
  signer: Signer,
): Promise<string> {
  const address = (await signer.getAddress()).toLowerCase();
  const signature = await signer.signMessage(legacy.DEFAULT_SIGNATURE_MESSAGE);
  const seed = splitSignature(signature).s;
  const path = legacy.getAccountPath(
    legacy.DEFAULT_ACCOUNT_LAYER,
    legacy.DEFAULT_ACCOUNT_APPLICATION,
    address,
    legacy.DEFAULT_ACCOUNT_INDEX,
  );
  const key = await getKeyFromPath(seed, path, address);
  return key.padStart(64, '0');
}

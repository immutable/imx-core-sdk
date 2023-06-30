import { Signer } from '@ethersproject/abstract-signer';
import { splitSignature } from '@ethersproject/bytes';
import {
  grindKey,
  starkEc,
  DEFAULT_ACCOUNT_LAYER,
  DEFAULT_ACCOUNT_APPLICATION,
  DEFAULT_ACCOUNT_INDEX,
  DEFAULT_SIGNATURE_MESSAGE,
  getAccountPath,
  getKeyPairFromPath,
} from './legacy/crypto';

/**
 * Generates a new Stark private key
 * @returns the private key as a hex string
 */
export function generateStarkPrivateKey(): string {
  const keyPair = starkEc.genKeyPair();
  return grindKey(keyPair.getPrivate('hex'));
}

/**
 * Generates a deterministic Stark private key from the provided signer.
 * @returns the private key as a hex string
 */
export async function generateLegacyStarkPrivateKey(
  signer: Signer,
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
  const keyPair = getKeyPairFromPath(seed, path);
  const key = keyPair.getPrivate('hex');
  return key.padStart(64, '0');
}

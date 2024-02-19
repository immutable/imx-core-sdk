import { ec } from 'elliptic';
import { Signer as EthSigner } from '@ethersproject/abstract-signer';
import { ec } from 'elliptic';

export { EthSigner };

/**
 * An abstraction of a Stark account, which can be used to sign messages and transactions on StarkEx to execute state changing operations
 */
export interface StarkSigner {
  /**
   * Signs the prefixed-message
   * @params message - this must be a UTF8-message
   * @example "0x1234"
   * @returns the signed prefixed-message
   */
  signMessage(message: string): Promise<string>;

  /**
   * Signs the prefixed-message
   * @params message - this must be a UTF8-message
   * @returns the signed prefixed-message
   */
  sign(message: string): Promise<ec.Signature>;

  getYCoordinate(): string;

  /**
   * Get the Signer address
   * @returns the Signer's checksum address
   */
  getAddress(): string | Promise<string>;
}

/**
 * A pair of Signers
 */
export interface WalletConnection {
  /**
   * The L1 signer
   */
  ethSigner: EthSigner;
  /**
   * The L2 signer
   */
  starkSigner: StarkSigner;
}

/**
 * Parameter required to create a batchNftTransfer
 */
export interface NftTransferDetails {
  /**
   * Ethereum address of the receiving user
   */
  receiver: string;
  /**
   * The token ID
   */
  tokenId: string;
  /**
   * The token contract address
   */
  tokenAddress: string;
}

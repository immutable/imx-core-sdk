/**
 * An ERC20 token
 */
export interface ERC20Token {
  type: 'ERC20';
  tokenAddress: string;
}

/**
 * An ERC721 token
 */
export interface ERC721Token {
  type: 'ERC721';
  tokenId: string;
  tokenAddress: string;
}

/**
 * An ETH token
 */
export interface ETHToken {
  type: 'ETH';
}

/**
 * An amount of ETH token of unit Wei
 */
export interface ETHAmount extends ETHToken {
  /**
   * An amount in unit Wei
   */
  amount: string;
}

/**
 * The token details and amount of ERC20 token units
 */
export interface ERC20Amount extends ERC20Token {
  /**
   * An amount in units for the given ERC20 token
   */
  amount: string;
}

/**
 * Union type that represents all token types
 */
export type AnyToken = ETHToken | ERC721Token | ERC20Token;

/**
 * Union type that represents all token type amounts
 */
export type TokenAmount = ETHAmount | ERC20Amount | ERC721Token;

/**
 * Union type that represents exchange token type amounts
 */
export type ExchangeTokenAmount = ETHAmount | ERC20Amount;

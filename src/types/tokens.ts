import { SignableToken } from '../api';

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
   * An amount in ERC20 unit
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
 * Helper method to convert token type to a SignableToken type
 * @param token - the token type to convert to a SignableToken type
 * @returns the converted SignableToken
 */
export function convertToSignableToken(token: TokenAmount): SignableToken {
  switch (token.type) {
    case 'ERC721':
      return {
        type: 'ERC721',
        data: {
          token_id: token.tokenId,
          token_address: token.tokenAddress,
        },
      };
    case 'ERC20':
      return {
        type: 'ERC20',
        data: {
          token_address: token.tokenAddress,
        },
      };
    case 'ETH':
      return {
        type: 'ETH',
        data: {
          decimals: 18,
        },
      };
  }
}

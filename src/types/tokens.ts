import { SignableToken } from '../api';

export interface ERC20Token {
  type: 'ERC20';
  tokenAddress: string;
}

export interface ERC721Token {
  type: 'ERC721';
  tokenId: string;
  tokenAddress: string;
}

export interface ETHToken {
  type: 'ETH';
}

export interface ETHAmount extends ETHToken {
  amount: string;
}
export interface ERC20Amount extends ERC20Token {
  amount: string;
}

export type AnyToken = ETHToken | ERC721Token | ERC20Token;

export type TokenAmount = ETHAmount | ERC20Amount | ERC721Token;

//SignableToken on the API requires fields in snake_case format
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

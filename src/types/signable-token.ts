import { SignableToken } from '../api';

export interface ERC20Token {
  type: 'ERC20';
  tokenAddress: string;
  decimals: number;
}

export interface ERC721Token {
  type: 'ERC721';
  tokenId: string;
  tokenAddress: string;
}

export interface ETHToken {
  type: 'ETH';
}

export type AnyToken = ETHToken | ERC721Token | ERC20Token;

//SignableToken on the API requires fields in snake_case format
export function convertToSignableToken(token: AnyToken): SignableToken {
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
          decimals: token.decimals,
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

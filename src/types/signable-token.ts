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

export interface SignableERC20Token {
  type: 'ERC20';
  data: {
    token_address: string;
    decimals: number;
  };
}

export interface SignableERC721Token {
  type: 'ERC721';
  data: {
    token_id: string;
    token_address: string;
  };
}

export interface SignableETHToken {
  type: 'ETH';
  data: {
    decimals: number;
  };
}

// Token structure required by API
export type AnySignableToken =
  | SignableETHToken
  | SignableERC721Token
  | SignableERC20Token;

//SignableToken on the API requires fields in snake_case format
export function convertToSignableToken(token: AnyToken): AnySignableToken {
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

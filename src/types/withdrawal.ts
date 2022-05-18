import { TokenType } from './token';

export interface ERC721Withdrawal {
  type: TokenType.ERC721;
  data: {
    tokenId: string,
    tokenAddress: string;
  };
}

export interface ERC20Withdrawal {
  type: TokenType.ERC20;
  data: {
    tokenId: string,
    tokenAddress: string;
  };
}

export interface MintableERC721Withdrawal {
  type: TokenType.ERC721;
  data: {
    id: string,
    blueprint?: string,
    tokenAddress: string,
  };
}

import { TokenType } from './token';

export interface ETHWithdrawal {
  type: TokenType.ETH;
}

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

export type TokenWithdrawal = ETHWithdrawal | ERC20Withdrawal | ERC721Withdrawal;


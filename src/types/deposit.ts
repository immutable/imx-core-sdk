import { TokenType } from './token';

export interface ETHDeposit {
  type: TokenType.ETH;
  amount: string;
}

export interface ERC20Deposit {
  type: TokenType.ERC20;
  tokenAddress: string;
  symbol: string;
  amount: string;
}

export interface ERC721Deposit {
  type: TokenType.ERC721;
  tokenId: string;
  tokenAddress: string;
}

export type TokenDeposit = ETHDeposit | ERC20Deposit | ERC721Deposit;

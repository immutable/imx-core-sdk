export enum TokenType {
  ETH = 'ETH',
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
}

export interface DepositableETH {
  type: TokenType.ETH;
  amount: string;
}

export interface DepositableERC20 {
  type: TokenType.ERC20;
  tokenAddress: string;
  symbol: string;
  amount: string;
}

export interface DepositableERC721 {
  type: TokenType.ERC721;
  tokenId: string;
  tokenAddress: string;
}

export type DepositableToken =
  | DepositableETH
  | DepositableERC20
  | DepositableERC721;

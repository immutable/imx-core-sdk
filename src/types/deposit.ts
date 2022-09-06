export interface ETHDeposit {
  type: 'ETH';
  amount: string;
}

export interface ERC20Deposit {
  type: 'ERC20';
  tokenAddress: string;
  amount: string;
}

export interface ERC721Deposit {
  type: 'ERC721';
  tokenId: string;
  tokenAddress: string;
}

export type TokenDeposit = ETHDeposit | ERC20Deposit | ERC721Deposit;

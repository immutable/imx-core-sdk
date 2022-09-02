import { AnyToken, ERC721Token, ETHToken } from './signable-token';

export interface ERC20Withdrawal {
  type: 'ERC20';
  tokenId: string;
  tokenAddress: string;
}

export type TokenWithdrawal = ETHToken | ERC20Withdrawal | ERC721Token;

export type PrepareWithdrawalRequest = {
  token: AnyToken;
  quantity: string;
};

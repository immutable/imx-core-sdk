import { TokenPrepareWithdrawal } from './withdrawal';

export interface SignableWithdrawalERC20 {
  type: 'ERC20';
  data: {
    token_address: string;
    decimals: number;
  };
}

export interface SignableWithdrawalERC721 {
  type: 'ERC721';
  data: {
    token_id: string;
    token_address: string;
  };
}

export type SignableWithdrawalEth = {
  type: 'ETH';
  data: {
    decimals: number;
  };
};

export type SignableWithdrawalToken =
  | SignableWithdrawalEth
  | SignableWithdrawalERC721
  | SignableWithdrawalERC20;

//SignableWithdrawal endpoint requires fields in snake_case format
export function convertToSignableRequestFormat(
  token: TokenPrepareWithdrawal,
): SignableWithdrawalToken {
  if (token.type === 'ERC721') {
    return {
      type: 'ERC721',
      data: {
        token_id: token.data.tokenId,
        token_address: token.data.tokenAddress,
      },
    };
  }
  if (token.type === 'ERC20') {
    return {
      type: 'ERC20',
      data: {
        decimals: token.data.decimals,
        token_address: token.data.tokenAddress,
      },
    };
  }
  return token;
}

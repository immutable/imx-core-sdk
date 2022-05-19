import { TokenPrepareWithdrawal } from './withdrawal';
import { TokenType } from './token';

interface SignableWithdrawalERC20 {
  type: TokenType.ERC20;
  data: {
    token_address: string;
    decimals: number,
  };
}

interface SignableWithdrawalERC721 {
  type: TokenType.ERC721;
  data: {
    token_id: string,
    token_address: string;
  };
}

type SignableWithdrawalEth = {
  type: TokenType.ETH,
  data: {
    decimals: number,
  }
}

type SignableWithdrawalToken = SignableWithdrawalEth | SignableWithdrawalERC721 | SignableWithdrawalERC20

//SignableWithdrawal endpoint requires fields in snake_case format
export function convertToSignableRequestFormat(token: TokenPrepareWithdrawal): SignableWithdrawalToken {
  if (token.type === TokenType.ERC721) {
    return {
      type: TokenType.ERC721,
      data: {
        token_id: token.data.tokenId,
        token_address: token.data.tokenAddress,
      },
    }
  }
  if (token.type === TokenType.ERC20) {
    return {
      type: TokenType.ERC20,
      data: {
        decimals: token.data.decimals,
        token_address: token.data.tokenAddress,
      },
    }
  }
  return token;
}
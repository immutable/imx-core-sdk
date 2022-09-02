export interface ETHWithdrawal {
  type: 'ETH';
}

export interface ETHPrepareWithdrawal {
  type: 'ETH';
  data: {
    decimals: number;
  };
}

export const ETH_PREPARE_WITHDRAWAL_DATA: ETHPrepareWithdrawal = {
  type: 'ETH',
  data: {
    decimals: 18,
  },
};

export interface ERC721Withdrawal {
  type: 'ERC721';
  data: {
    tokenId: string;
    tokenAddress: string;
  };
}

export interface ERC20Withdrawal {
  type: 'ERC20';
  data: {
    tokenId: string;
    tokenAddress: string;
  };
}

export interface ERC20PrepareWithdrawal {
  type: 'ERC20';
  data: {
    tokenAddress: string;
    decimals: number;
  };
}


export type TokenWithdrawal = ETHWithdrawal | ERC20Withdrawal | ERC721Withdrawal;
export type TokenPrepareWithdrawal = ETHPrepareWithdrawal | ERC20PrepareWithdrawal | ERC721Withdrawal;

export type PrepareWithdrawalRequest = {
  token: TokenPrepareWithdrawal;
  quantity: string;
};

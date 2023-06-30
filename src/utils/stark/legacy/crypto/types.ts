export type Instruction =
  | 'order'
  | 'transfer'
  | 'registerUser'
  | 'deposit'
  | 'withdraw'
  | 'cancelOrder';
export type InstructionWithFee = 'orderWithFee' | 'transferWithFee';

export type FeeParams = {
  feeToken: string;
  feeVault: string;
  feeLimit: string;
};

export type LimitOrderParams = {
  vaultSell: string;
  vaultBuy: string;
  amountSell: string;
  amountBuy: string;
  nonce: string;
  expirationTimestamp: string;
  tokenSell: string;
  tokenBuy: string;
};

export type LimitOrderWithFeeParams = LimitOrderParams & FeeParams;

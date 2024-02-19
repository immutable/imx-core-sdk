import { Signer } from '@ethersproject/abstract-signer';
import { TransactionResponse } from '@ethersproject/providers';
import { AnyToken } from 'src/types';
import {
  completeAllEthWithdrawalWorkflow,
  completeEthWithdrawalV1Workflow,
  completeEthWithdrawalV2Workflow,
} from './completeEthWithdrawal';
import { EncodingApi, MintsApi, UsersApi } from 'src/api';
import { ImmutableXConfiguration } from 'src/config';
import {
  completeAllERC20WithdrawalWorkflow,
  completeERC20WithdrawalV1Workflow,
  completeERC20WithdrawalV2Workflow,
} from './completeERC20Withdrawal';
import {
  completeERC721WithdrawalV1Workflow,
  completeERC721WithdrawalV2Workflow,
} from './completeERC721Withdrawal';

export async function completeWithdrawalV1Workflow(
  signer: Signer,
  starkPublicKey: string,
  token: AnyToken,
  encodingApi: EncodingApi,
  usersApi: UsersApi,
  mintsApi: MintsApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  switch (token.type) {
    case 'ETH':
      return completeEthWithdrawalV1Workflow(
        signer,
        starkPublicKey,
        encodingApi,
        usersApi,
        config,
      );
    case 'ERC20':
      return completeERC20WithdrawalV1Workflow(
        signer,
        starkPublicKey,
        token,
        encodingApi,
        usersApi,
        config,
      );
    case 'ERC721':
      return completeERC721WithdrawalV1Workflow(
        signer,
        starkPublicKey,
        token,
        encodingApi,
        mintsApi,
        usersApi,
        config,
      );
  }
}

export async function completeWithdrawalV2Workflow(
  signer: Signer,
  ownerKey: string,
  token: AnyToken,
  encodingApi: EncodingApi,
  mintsApi: MintsApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  switch (token.type) {
    case 'ETH':
      return completeEthWithdrawalV2Workflow(signer, encodingApi, config);
    case 'ERC20':
      return completeERC20WithdrawalV2Workflow(
        signer,
        token,
        encodingApi,
        config,
      );
    case 'ERC721':
      return completeERC721WithdrawalV2Workflow(
        signer,
        ownerKey,
        token,
        encodingApi,
        mintsApi,
        config,
      );
  }
}

export async function completeAllWithdrawalWorkflow(
  signer: Signer,
  starkPublicKey: string,
  token: AnyToken,
  encodingApi: EncodingApi,
  mintsApi: MintsApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  switch (token.type) {
    case 'ETH':
      return completeAllEthWithdrawalWorkflow(
        signer,
        starkPublicKey,
        encodingApi,
        config,
      );
    case 'ERC20':
      return completeAllERC20WithdrawalWorkflow(
        signer,
        starkPublicKey,
        token,
        encodingApi,
        config,
      );
    case 'ERC721':
      // for ERC721, if the v3 balance > 0, then the v4 balance is 0
      return completeERC721WithdrawalV2Workflow(
        signer,
        starkPublicKey,
        token,
        encodingApi,
        mintsApi,
        config,
      );
  }
}

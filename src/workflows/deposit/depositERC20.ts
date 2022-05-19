import { Signer } from '@ethersproject/abstract-signer';
import { TransactionResponse } from '@ethersproject/providers';
import { DepositsApi, EncodingApi, TokensApi, UsersApi } from '../../api';
import { parseUnits } from 'ethers/lib/utils';
import {
  Core,
  Core__factory,
  IERC20__factory,
  Registration__factory,
} from '../../contracts';
import {
  getSignableRegistrationOnchain,
  isRegisteredOnChainWorkflow,
} from '../registration';
import { Config, ERC20Deposit } from '../../types';
import { BigNumber } from 'ethers';

interface ERC20TokenData {
  decimals: number;
  token_address: string;
}

export async function depositERC20Workflow(
  signer: Signer,
  deposit: ERC20Deposit,
  depositsApi: DepositsApi,
  usersApi: UsersApi,
  tokensApi: TokensApi,
  encodingApi: EncodingApi,
  config: Config,
): Promise<TransactionResponse> {
  // Configure request parameters
  const user = (await signer.getAddress()).toLowerCase();

  // Get decimals for this specific ERC20
  const token = await tokensApi.getToken({ address: deposit.tokenAddress });
  const decimals = parseInt(token.data.decimals!);

  const data: ERC20TokenData = {
    decimals,
    token_address: deposit.tokenAddress,
  };

  const amount = parseUnits(deposit.amount, BigNumber.from(decimals));

  // Approve whether an amount of token from an account can be spent by a third-party account
  const tokenContract = IERC20__factory.connect(deposit.tokenAddress, signer);
  const approveTransaction = await tokenContract.populateTransaction.approve(
    config.starkContractAddress,
    amount,
  );
  await signer.sendTransaction(approveTransaction);

  // Get signable deposit details
  const getSignableDepositRequest = {
    user,
    token: {
      type: deposit.type,
      data,
    },
    amount: amount.toString(),
  };

  const signableDepositResult = await depositsApi.getSignableDeposit({
    getSignableDepositRequest,
  });

  // Perform encoding on asset details to get an assetType (required for stark contract request)
  const encodingResult = await encodingApi.encodeAsset({
    assetType: 'asset',
    encodeAssetRequest: {
      token: {
        type: deposit.type,
        data: {
          token_address: deposit.tokenAddress,
        },
      },
    },
  });

  const assetType = encodingResult.data.asset_type!;
  const starkPublicKey = signableDepositResult.data.stark_key!;
  const vaultId = signableDepositResult.data.vault_id!;
  const quantizedAmount = BigNumber.from(signableDepositResult.data.amount!);

  // Get instance of core contract
  const coreContract = Core__factory.connect(
    config.starkContractAddress,
    signer,
  );

  // Get instance of registration contract
  const registrationContract = Registration__factory.connect(
    config.registrationContractAddress,
    signer,
  );

  // Check if user is registered onchain
  const isRegistered = await isRegisteredOnChainWorkflow(
    starkPublicKey,
    registrationContract,
  );

  if (!isRegistered) {
    return executeRegisterAndDepositERC20(
      signer,
      quantizedAmount,
      assetType,
      starkPublicKey,
      vaultId,
      coreContract,
      usersApi,
    );
  } else {
    return executeDepositERC20(
      signer,
      quantizedAmount,
      assetType,
      starkPublicKey,
      vaultId,
      coreContract,
    );
  }
}

async function executeRegisterAndDepositERC20(
  signer: Signer,
  quantizedAmount: BigNumber,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const populatedTransaction =
    await contract.populateTransaction.registerAndDepositERC20(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature!,
      assetType,
      vaultId,
      quantizedAmount,
    );

  return signer.sendTransaction(populatedTransaction);
}

async function executeDepositERC20(
  signer: Signer,
  quantizedAmount: BigNumber,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
): Promise<TransactionResponse> {
  const populatedTransaction = await contract.populateTransaction.depositERC20(
    starkPublicKey,
    assetType,
    vaultId,
    quantizedAmount,
  );

  return signer.sendTransaction(populatedTransaction);
}

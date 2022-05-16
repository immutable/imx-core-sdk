import { Signer } from '@ethersproject/abstract-signer';
import { DepositsApi, EncodingApi, TokensApi, UsersApi } from '../../api';
import { parseUnits } from 'ethers/lib/utils';
import { Core, ERC20__factory } from '../../contracts';
import { isRegisteredOnChain } from '../registration';
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
  contract: Core,
  config: Config,
): Promise<string> {
  // Configure request parameters
  const user = (await signer.getAddress()).toLowerCase();

  // Get decimals
  let decimals;
  try {
    const token = await tokensApi.getToken({ address: deposit.tokenAddress });
    decimals = parseInt(token.data.decimals!);
  } catch (error) {
    throw new Error('Code 2001 - Token not available in IMX.');
  }

  // Specific to ERC20
  const data: ERC20TokenData = {
    decimals,
    token_address: deposit.tokenAddress,
  };

  const amount = parseUnits(deposit.amount, BigNumber.from(decimals));

  // Approve whether an amount of token from an account can be spent by a third-party account
  const tokenContract = ERC20__factory.connect(deposit.tokenAddress, signer);
  const approveTrx = await tokenContract.populateTransaction.approve(
    config.starkContractAddress,
    amount,
  );
  await signer.sendTransaction(approveTrx);

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

  // Check if user is registered onchain
  const isRegistered = await isRegisteredOnChain(signer, contract);

  if (!isRegistered) {
    return executeRegisterAndDepositERC20(
      signer,
      quantizedAmount,
      assetType,
      starkPublicKey,
      vaultId,
      contract,
      usersApi,
    );
  } else {
    return executeDepositERC20(
      signer,
      quantizedAmount,
      assetType,
      starkPublicKey,
      vaultId,
      contract,
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
): Promise<string> {
  const etherKey = await signer.getAddress();

  // TODO possibly move to registration workflow?
  const signableRegistrationResponse = await usersApi.getSignableRegistration({
    getSignableRegistrationRequest: {
      ether_key: etherKey,
      stark_key: starkPublicKey,
    },
  });

  const trx = await contract.populateTransaction.registerAndDepositERC20(
    etherKey,
    starkPublicKey,
    signableRegistrationResponse.data.operator_signature!,
    assetType,
    vaultId,
    quantizedAmount,
  );

  return signer.sendTransaction(trx).then(res => res.hash);
}

async function executeDepositERC20(
  signer: Signer,
  quantizedAmount: BigNumber,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
): Promise<string> {
  const trx = await contract.populateTransaction.depositERC20(
    starkPublicKey,
    assetType,
    vaultId,
    quantizedAmount,
  );

  return signer.sendTransaction(trx).then(res => res.hash);
}

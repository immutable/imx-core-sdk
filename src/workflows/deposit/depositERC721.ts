import { Signer } from '@ethersproject/abstract-signer';
import { DepositsApi, EncodingApi, UsersApi } from '../../api';
import { Core, ERC721__factory } from '../../contracts';
import {
  getSignableRegistrationOnchain,
  isRegisteredOnChainWorkflow,
} from '../registration';
import { Config, ERC721Deposit } from '../../types';

interface ERC721TokenData {
  token_id: string;
  token_address: string;
}

export async function depositERC721Workflow(
  signer: Signer,
  deposit: ERC721Deposit,
  depositsApi: DepositsApi,
  usersApi: UsersApi,
  encodingApi: EncodingApi,
  contract: Core,
  config: Config,
): Promise<string> {
  // Configure request parameters
  const user = (await signer.getAddress()).toLowerCase();

  const data: ERC721TokenData = {
    token_address: deposit.tokenAddress,
    token_id: deposit.tokenId,
  };

  const amount = '1';

  // Approve whether an amount of token from an account can be spent by a third-party account
  const tokenContract = ERC721__factory.connect(deposit.tokenAddress, signer);
  const approveTrx = await tokenContract.populateTransaction.approve(
    config.starkContractAddress,
    deposit.tokenId,
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
          token_id: deposit.tokenId,
        },
      },
    },
  });

  const assetType = encodingResult.data.asset_type!;
  const starkPublicKey = signableDepositResult.data.stark_key!;
  const vaultId = signableDepositResult.data.vault_id!;

  // Check if user is registered onchain
  const isRegistered = await isRegisteredOnChainWorkflow(signer, contract);

  if (!isRegistered) {
    return executeRegisterAndDepositERC721(
      signer,
      deposit.tokenId,
      assetType,
      starkPublicKey,
      vaultId,
      contract,
      usersApi,
    );
  } else {
    return executeDepositERC721(
      signer,
      deposit.tokenId,
      assetType,
      starkPublicKey,
      vaultId,
      contract,
    );
  }
}

async function executeRegisterAndDepositERC721(
  signer: Signer,
  tokenId: string,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
  usersApi: UsersApi,
): Promise<string> {
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  // There is no wrapper function for registering and depositing NFTs
  // Do as consecutive transactions
  const registerTrx = await contract.populateTransaction.registerUser(
    etherKey,
    starkPublicKey,
    signableResult.operator_signature!,
  );

  const registerTransactionResponse = await signer.sendTransaction(registerTrx);

  // Wait for the register transaction to be mined, otherwise the below transaction will fail
  await registerTransactionResponse.wait();

  const trx = await contract.populateTransaction.depositNft(
    starkPublicKey,
    assetType,
    vaultId,
    tokenId,
  );

  return signer.sendTransaction(trx).then(res => res.hash);
}

async function executeDepositERC721(
  signer: Signer,
  tokenId: string,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
): Promise<string> {
  const trx = await contract.populateTransaction.depositNft(
    starkPublicKey,
    assetType,
    vaultId,
    tokenId,
  );

  return signer.sendTransaction(trx).then(res => res.hash);
}

import { Signer } from '@ethersproject/abstract-signer';
import { TransactionResponse } from '@ethersproject/providers';
import { DepositsApi, EncodingApi, UsersApi } from '../../api';
import {
  Core,
  Core__factory,
  IERC721__factory,
  Registration,
  Registration__factory,
} from '../../contracts';
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
  config: Config,
): Promise<TransactionResponse> {
  // Configure request parameters
  const user = (await signer.getAddress()).toLowerCase();

  const data: ERC721TokenData = {
    token_address: deposit.tokenAddress,
    token_id: deposit.tokenId,
  };

  const amount = '1';

  // Approve whether an amount of token from an account can be spent by a third-party account
  const tokenContract = IERC721__factory.connect(deposit.tokenAddress, signer);
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
    return executeRegisterAndDepositERC721(
      signer,
      deposit.tokenId,
      assetType,
      starkPublicKey,
      vaultId,
      registrationContract,
      usersApi,
    );
  } else {
    return executeDepositERC721(
      signer,
      deposit.tokenId,
      assetType,
      starkPublicKey,
      vaultId,
      coreContract,
    );
  }
}

async function executeRegisterAndDepositERC721(
  signer: Signer,
  tokenId: string,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Registration,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  // Use proxy registration contract for wrapping register and depositi NFTs
  const trx = await contract.populateTransaction.registerAndDepositNft(
    etherKey,
    starkPublicKey,
    signableResult.operator_signature!,
    assetType,
    vaultId,
    tokenId,
  );

  return signer.sendTransaction(trx);
}

async function executeDepositERC721(
  signer: Signer,
  tokenId: string,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
): Promise<TransactionResponse> {
  const trx = await contract.populateTransaction.depositNft(
    starkPublicKey,
    assetType,
    vaultId,
    tokenId,
  );

  return signer.sendTransaction(trx);
}

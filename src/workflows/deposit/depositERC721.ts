import { Signer } from '@ethersproject/abstract-signer';
import { TransactionResponse } from '@ethersproject/providers';
import { DepositsApi, EncodingApi, UsersApi } from '../../api';
import {
  Core,
  Core__factory,
  IERC721__factory,
  Registration__factory,
} from '../../contracts';
import {
  getSignableRegistrationOnchain,
  isRegisteredOnChainWorkflow,
} from '../registration';
import { ERC721Token } from '../../types';
import { ImmutableXConfiguration } from '../../config';

interface ERC721TokenData {
  token_id: string;
  token_address: string;
}

async function executeDepositERC721(
  signer: Signer,
  tokenId: string,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
): Promise<TransactionResponse> {
  const populatedTransaction = await contract.populateTransaction.depositNft(
    starkPublicKey,
    assetType,
    vaultId,
    tokenId,
  );

  return signer.sendTransaction(populatedTransaction);
}

export async function depositERC721Workflow(
  signer: Signer,
  deposit: ERC721Token,
  depositsApi: DepositsApi,
  usersApi: UsersApi,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  const user = await signer.getAddress();

  const data: ERC721TokenData = {
    token_address: deposit.tokenAddress,
    token_id: deposit.tokenId,
  };

  const amount = '1';

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

  const assetType = encodingResult.data.asset_type;
  const starkPublicKey = signableDepositResult.data.stark_key;
  const vaultId = signableDepositResult.data.vault_id;

  const coreContract = Core__factory.connect(
    config.ethConfiguration.coreContractAddress,
    signer,
  );

  const registrationContract = Registration__factory.connect(
    config.ethConfiguration.registrationContractAddress,
    signer,
  );

  const isRegistered = await isRegisteredOnChainWorkflow(
    starkPublicKey,
    registrationContract,
  );

  // Approve whether an amount of token from an account can be spent by a third-party account
  const tokenContract = IERC721__factory.connect(deposit.tokenAddress, signer);
  const operator = config.ethConfiguration.coreContractAddress;
  const isApprovedForAll = await tokenContract.isApprovedForAll(user, operator);
  if (!isApprovedForAll) {
    await tokenContract.setApprovalForAll(operator, true);
  }

  if (!isRegistered) {
    const signableResult = await getSignableRegistrationOnchain(
      user,
      starkPublicKey,
      usersApi,
    );

    // Note: proxy registration contract registerAndDepositNft method is not used as it currently fails erc721 transfer ownership check
    await coreContract.registerUser(
      user,
      starkPublicKey,
      signableResult.operator_signature,
    );
  }

  return executeDepositERC721(
    signer,
    deposit.tokenId,
    assetType,
    starkPublicKey,
    vaultId,
    coreContract,
  );
}

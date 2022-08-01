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
import { ImmutableXConfiguration, ERC721Deposit } from '../../types';

interface ERC721TokenData {
  token_id: string;
  token_address: string;
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

  // Use proxy registration contract for wrapping register and deposit NFTs
  const populatedTransaction =
    await contract.populateTransaction.registerAndDepositNft(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature,
      assetType,
      vaultId,
      tokenId,
    );

  return signer.sendTransaction(populatedTransaction);
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
  deposit: ERC721Deposit,
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

  // Approve whether an amount of token from an account can be spent by a third-party account
  const tokenContract = IERC721__factory.connect(deposit.tokenAddress, signer);
  const approveTransaction = await tokenContract.populateTransaction.approve(
    config.l1Configuration.coreContractAddress,
    deposit.tokenId,
  );
  await signer.sendTransaction(approveTransaction);

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
    config.l1Configuration.coreContractAddress,
    signer,
  );

  const registrationContract = Registration__factory.connect(
    config.l1Configuration.registrationContractAddress,
    signer,
  );

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

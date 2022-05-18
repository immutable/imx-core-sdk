import { Signer } from '@ethersproject/abstract-signer';
import { EncodingApi, MintsApi, UsersApi } from '../../api';
import {
  Core,
  Core__factory,
  Registration,
  Registration__factory,
} from '../../contracts';
import * as encUtils from 'enc-utils';
import { Config, ERC721Withdrawal, TokenType } from '../../types';
import { getEncodeAssetInfo } from './getEncodeAssetInfo';
import {
  getSignableRegistrationOnchain,
  isRegisteredOnChainWorkflow,
} from '../registration';
import { TransactionResponse } from '@ethersproject/providers';

interface MintableERC721Withdrawal {
  type: TokenType.ERC721;
  data: {
    id: string;
    blueprint?: string;
    tokenAddress: string;
  };
}

export async function completeERC721WithdrawalWorkflow(
  signer: Signer,
  starkPublicKey: string,
  token: ERC721Withdrawal,
  encodingApi: EncodingApi,
  mintsApi: MintsApi,
  usersApi: UsersApi,
  config: Config,
) {
  // TODO remove log once UAT passes
  console.log('completeERC721WithdrawalWorkflow');
  const tokenAddress = token.data.tokenAddress;
  const tokenId = token.data.tokenId;
  return await mintsApi
    .getMintableTokenDetailsByClientTokenId({
      tokenAddress,
      tokenId,
    })
    .then(mintableToken =>
      completeMintableERC721Withdrawal(
        signer,
        starkPublicKey,
        {
          type: TokenType.ERC721,
          data: {
            id: tokenId,
            tokenAddress: tokenAddress,
            blueprint: mintableToken.data.blueprint,
          },
        },
        encodingApi,
        usersApi,
        config,
      ),
    )
    .catch(error => {
      if (error.response.status === 404) {
        // token is already minted on L1
        console.log(error.response);
        return completeERC721Withdrawal(
          signer,
          starkPublicKey,
          token,
          encodingApi,
          usersApi,
          config,
        );
      }
      throw error; // unable to recover from any other kind of error
    });
}

async function completeMintableERC721Withdrawal(
  signer: Signer,
  starkPublicKey: string,
  token: MintableERC721Withdrawal,
  encodingApi: EncodingApi,
  usersApi: UsersApi,
  config: Config,
) {
  // TODO remove log once UAT passes
  console.log('completeMintableERC721Withdrawal');
  const assetType = await getEncodeAssetInfo(
    'mintable-asset',
    TokenType.ERC721,
    encodingApi,
    {
      id: token.data.id,
      token_address: token.data.tokenAddress,
      ...(token.data.blueprint && { blueprint: token.data.blueprint }),
    },
  );
  const mintingBlob = getMintingBlob(token);

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
  // TODO remove log once UAT passes
  console.log('isRegistered', isRegistered);

  if (!isRegistered) {
    return executeRegisterAndWithdrawMintableERC721(
      signer,
      assetType.asset_type!,
      starkPublicKey,
      mintingBlob,
      registrationContract,
      usersApi,
    );
  } else {
    return executeWithdrawMintableERC721(
      signer,
      assetType.asset_type!,
      starkPublicKey,
      mintingBlob,
      coreContract,
    );
  }
}

async function executeRegisterAndWithdrawMintableERC721(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  mintingBlob: string,
  contract: Registration,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  // TODO remove log once UAT passes
  console.log('executeRegisterAndWithdrawMintableERC721');
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const populatedTrasaction =
    await contract.populateTransaction.regsiterAndWithdrawAndMint(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature!,
      assetType,
      mintingBlob,
    );

  return signer.sendTransaction(populatedTrasaction);
}

async function executeWithdrawMintableERC721(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  mintingBlob: string,
  contract: Core,
): Promise<TransactionResponse> {
  // TODO remove log once UAT passes
  console.log('executeWithdrawMintableERC721');
  const populatedTrasaction =
    await contract.populateTransaction.withdrawAndMint(
      starkPublicKey,
      assetType,
      mintingBlob,
    );
  return signer.sendTransaction(populatedTrasaction);
}

async function completeERC721Withdrawal(
  signer: Signer,
  starkPublicKey: string,
  token: ERC721Withdrawal,
  encodingApi: EncodingApi,
  usersApi: UsersApi,
  config: Config,
) {
  // TODO remove log once UAT passes
  console.log('completeERC721Withdrawal');
  const assetType = await getEncodeAssetInfo(
    'asset',
    TokenType.ERC721,
    encodingApi,
    {
      token_id: token.data.tokenId,
      token_address: token.data.tokenAddress,
    },
  );

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
  // TODO remove log once UAT passes
  console.log('isRegistered', isRegistered);

  if (!isRegistered) {
    return executeRegisterAndWithdrawERC721(
      signer,
      assetType.asset_type!,
      starkPublicKey,
      token.data.tokenId,
      registrationContract,
      usersApi,
    );
  } else {
    return executeWithdrawERC721(
      signer,
      assetType.asset_type!,
      starkPublicKey,
      token.data.tokenId,
      coreContract,
    );
  }
}

async function executeRegisterAndWithdrawERC721(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  tokenId: string,
  contract: Registration,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  // TODO remove log once UAT passes
  console.log('executeRegisterAndWithdrawERC721');
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const populatedTrasaction =
    await contract.populateTransaction.registerAndWithdrawNft(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature!,
      assetType,
      tokenId,
    );

  return signer.sendTransaction(populatedTrasaction);
}

async function executeWithdrawERC721(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  tokenId: string,
  contract: Core,
): Promise<TransactionResponse> {
  // TODO remove log once UAT passes
  console.log('executeWithdrawERC721');
  const populatedTrasaction = await contract.populateTransaction.withdrawNft(
    starkPublicKey,
    assetType,
    tokenId,
  );
  return signer.sendTransaction(populatedTrasaction);
}

function getMintingBlob(token: MintableERC721Withdrawal): string {
  const id = token.data.id;
  const blueprint = token.data.blueprint || '';
  return encUtils.sanitizeHex(encUtils.utf8ToHex(`{${id}}:{${blueprint}}`));
}

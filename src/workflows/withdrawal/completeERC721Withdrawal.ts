import { Signer } from '@ethersproject/abstract-signer';
import { EncodingApi, MintsApi, UsersApi } from '../../api';
import {
  Core,
  Core__factory,
  CoreV4__factory,
  Registration,
  Registration__factory,
  RegistrationV4__factory,
} from '../../contracts';
import * as encUtils from 'enc-utils';
import { ERC721Token, WalletConnection } from '../../types';
import { getEncodeAssetInfo } from './getEncodeAssetInfo';
import {
  getSignableRegistrationOnchain,
  isRegisteredOnChainWorkflow,
  signRegisterEthAddress,
} from '../registration';
import { TransactionResponse } from '@ethersproject/providers';
import { ImmutableXConfiguration } from '../../config';

interface MintableERC721Withdrawal {
  type: 'ERC721';
  data: {
    id: string;
    blueprint?: string;
    tokenAddress: string;
  };
}

async function executeWithdrawMintableERC721(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  mintingBlob: string,
  contract: Core,
): Promise<TransactionResponse> {
  const populatedTransaction =
    await contract.populateTransaction.withdrawAndMint(
      starkPublicKey,
      assetType,
      mintingBlob,
    );
  return signer.sendTransaction(populatedTransaction);
}

async function executeRegisterAndWithdrawMintableERC721(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  mintingBlob: string,
  contract: Registration,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const populatedTransaction =
    await contract.populateTransaction.regsiterAndWithdrawAndMint(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature,
      assetType,
      mintingBlob,
    );

  return signer.sendTransaction(populatedTransaction);
}

function getMintingBlob(token: MintableERC721Withdrawal): string {
  const id = token.data.id;
  const blueprint = token.data.blueprint || '';
  return encUtils.sanitizeHex(encUtils.utf8ToHex(`{${id}}:{${blueprint}}`));
}

async function completeMintableERC721WithdrawalV1(
  signer: Signer,
  starkPublicKey: string,
  token: MintableERC721Withdrawal,
  encodingApi: EncodingApi,
  usersApi: UsersApi,
  config: ImmutableXConfiguration,
) {
  const assetType = await getEncodeAssetInfo(
    'mintable-asset',
    'ERC721',
    encodingApi,
    {
      id: token.data.id,
      token_address: token.data.tokenAddress,
      ...(token.data.blueprint && { blueprint: token.data.blueprint }),
    },
  );
  const mintingBlob = getMintingBlob(token);

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

  if (!isRegistered) {
    return executeRegisterAndWithdrawMintableERC721(
      signer,
      assetType.asset_type,
      starkPublicKey,
      mintingBlob,
      registrationContract,
      usersApi,
    );
  } else {
    return executeWithdrawMintableERC721(
      signer,
      assetType.asset_type,
      starkPublicKey,
      mintingBlob,
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
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const populatedTransaction =
    await contract.populateTransaction.registerAndWithdrawNft(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature,
      assetType,
      tokenId,
    );

  return signer.sendTransaction(populatedTransaction);
}

async function executeWithdrawERC721(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  tokenId: string,
  contract: Core,
): Promise<TransactionResponse> {
  const populatedTransaction = await contract.populateTransaction.withdrawNft(
    starkPublicKey,
    assetType,
    tokenId,
  );
  return signer.sendTransaction(populatedTransaction);
}

async function completeERC721WithdrawalV1(
  signer: Signer,
  starkPublicKey: string,
  token: ERC721Token,
  encodingApi: EncodingApi,
  usersApi: UsersApi,
  config: ImmutableXConfiguration,
) {
  const assetType = await getEncodeAssetInfo('asset', 'ERC721', encodingApi, {
    token_id: token.tokenId,
    token_address: token.tokenAddress,
  });

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

  if (!isRegistered) {
    return executeRegisterAndWithdrawERC721(
      signer,
      assetType.asset_type,
      starkPublicKey,
      token.tokenId,
      registrationContract,
      usersApi,
    );
  } else {
    return executeWithdrawERC721(
      signer,
      assetType.asset_type,
      starkPublicKey,
      token.tokenId,
      coreContract,
    );
  }
}

export async function completeERC721WithdrawalV1Workflow(
  signer: Signer,
  starkPublicKey: string,
  token: ERC721Token,
  encodingApi: EncodingApi,
  mintsApi: MintsApi,
  usersApi: UsersApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  const tokenAddress = token.tokenAddress;
  const tokenId = token.tokenId;
  return await mintsApi
    .getMintableTokenDetailsByClientTokenId({
      tokenAddress,
      tokenId,
    })
    .then(mintableToken =>
      completeMintableERC721WithdrawalV1(
        signer,
        starkPublicKey,
        {
          type: 'ERC721',
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
      if (error.response?.status === 404) {
        // token is already minted on L1
        return completeERC721WithdrawalV1(
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

async function completeMintableERC721WithdrawalV2(
  signer: Signer,
  ownerKey: string,
  token: MintableERC721Withdrawal,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
) {
  const assetType = await getEncodeAssetInfo(
    'mintable-asset',
    'ERC721',
    encodingApi,
    {
      id: token.data.id,
      token_address: token.data.tokenAddress,
      ...(token.data.blueprint && { blueprint: token.data.blueprint }),
    },
  );
  const mintingBlob = getMintingBlob(token);

  const coreContract = CoreV4__factory.connect(
    config.ethConfiguration.coreContractAddress,
    signer,
  );

  const populatedTransaction =
    await coreContract.populateTransaction.withdrawAndMint(
      ownerKey,
      assetType.asset_type,
      mintingBlob,
    );
  return signer.sendTransaction(populatedTransaction);
}

async function completeERC721WithdrawalV2(
  signer: Signer,
  ownerKey: string,
  token: ERC721Token,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
) {
  const assetType = await getEncodeAssetInfo('asset', 'ERC721', encodingApi, {
    token_id: token.tokenId,
    token_address: token.tokenAddress,
  });

  const coreContract = CoreV4__factory.connect(
    config.ethConfiguration.coreContractAddress,
    signer,
  );

  const populatedTransaction =
    await coreContract.populateTransaction.withdrawNft(
      ownerKey,
      assetType.asset_type,
      token.tokenId,
    );
  return signer.sendTransaction(populatedTransaction);
}

async function registerAndCompleteMintableERC721WithdrawalV2(
  signer: Signer,
  ethAddress: string,
  starkPublicKey: string,
  starkSignature: string,
  token: MintableERC721Withdrawal,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
) {
  const assetType = await getEncodeAssetInfo(
    'mintable-asset',
    'ERC721',
    encodingApi,
    {
      id: token.data.id,
      token_address: token.data.tokenAddress,
      ...(token.data.blueprint && { blueprint: token.data.blueprint }),
    },
  );
  const mintingBlob = getMintingBlob(token);
  const contract = RegistrationV4__factory.connect(
    config.ethConfiguration.registrationV4ContractAddress,
    signer,
  );

  const populatedTransaction =
    await contract.populateTransaction.registerWithdrawAndMint(
      ethAddress,
      starkPublicKey,
      starkSignature,
      assetType.asset_type,
      mintingBlob,
    );
  return signer.sendTransaction(populatedTransaction);
}

async function registerAndCompleteERC721WithdrawalV2(
  signer: Signer,
  ethAddress: string,
  starkPublicKey: string,
  starkSignature: string,
  token: ERC721Token,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
) {
  const assetType = await getEncodeAssetInfo('asset', 'ERC721', encodingApi, {
    token_id: token.tokenId,
    token_address: token.tokenAddress,
  });

  const contract = RegistrationV4__factory.connect(
    config.ethConfiguration.registrationV4ContractAddress,
    signer,
  );

  const populatedTransaction =
    await contract.populateTransaction.registerAndWithdrawNft(
      ethAddress,
      starkPublicKey,
      starkSignature,
      assetType.asset_type,
      token.tokenId,
    );
  return signer.sendTransaction(populatedTransaction);
}

export async function completeERC721WithdrawalV2Workflow(
  signer: Signer,
  ownerKey: string,
  token: ERC721Token,
  encodingApi: EncodingApi,
  mintsApi: MintsApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  const tokenAddress = token.tokenAddress;
  const tokenId = token.tokenId;
  return await mintsApi
    .getMintableTokenDetailsByClientTokenId({
      tokenAddress,
      tokenId,
    })
    .then(mintableToken =>
      completeMintableERC721WithdrawalV2(
        signer,
        ownerKey,
        {
          type: 'ERC721',
          data: {
            id: tokenId,
            tokenAddress: tokenAddress,
            blueprint: mintableToken.data.blueprint,
          },
        },
        encodingApi,
        config,
      ),
    )
    .catch(error => {
      if (error.response?.status === 404) {
        // token is already minted on L1
        return completeERC721WithdrawalV2(
          signer,
          ownerKey,
          token,
          encodingApi,
          config,
        );
      }
      throw error; // unable to recover from any other kind of error
    });
}

export async function registerAndCompleteERC721WithdrawalWorkflow(
  walletConnection: WalletConnection,
  ethAddress: string,
  starkPublicKey: string,
  token: ERC721Token,
  encodingApi: EncodingApi,
  mintsApi: MintsApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  const starkSignature = await signRegisterEthAddress(
    walletConnection.starkSigner,
    ethAddress,
    starkPublicKey,
  );
  const tokenAddress = token.tokenAddress;
  const tokenId = token.tokenId;

  return await mintsApi
    .getMintableTokenDetailsByClientTokenId({
      tokenAddress,
      tokenId,
    })
    .then(async mintableToken =>
      registerAndCompleteMintableERC721WithdrawalV2(
        walletConnection.ethSigner,
        ethAddress,
        starkPublicKey,
        starkSignature,
        {
          type: 'ERC721',
          data: {
            id: tokenId,
            tokenAddress: tokenAddress,
            blueprint: mintableToken.data.blueprint,
          },
        },
        encodingApi,
        config,
      ),
    )
    .catch(error => {
      if (error.response?.status === 404) {
        // token is already minted on L1
        return registerAndCompleteERC721WithdrawalV2(
          walletConnection.ethSigner,
          ethAddress,
          starkPublicKey,
          starkSignature,
          token,
          encodingApi,
          config,
        );
      }
      throw error; // unable to recover from any other kind of error
    });
}

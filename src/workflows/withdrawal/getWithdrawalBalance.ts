import { Signer } from '@ethersproject/abstract-signer';
import { EncodingApi, MintsApi } from '../../api';
import { ImmutableXConfiguration } from '../../config';
import { CoreV4__factory } from '../../contracts';
import { AnyToken, ERC721Token } from '../../types';
import { getEncodeAssetInfo } from './getEncodeAssetInfo';
import { BigNumber } from 'ethers';

async function getWithdrawalBalance(
  signer: Signer,
  ownerKey: string,
  assetId: string,
  config: ImmutableXConfiguration,
) {
  const coreContract = CoreV4__factory.connect(
    config.ethConfiguration.coreContractAddress,
    signer,
  );
  return coreContract.getWithdrawalBalance(ownerKey, assetId);
}

async function getETHWithdrawalBalance(
  signer: Signer,
  ownerKey: string,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
): Promise<BigNumber> {
  const assetType = await getEncodeAssetInfo('asset', 'ETH', encodingApi);
  return await getWithdrawalBalance(
    signer,
    ownerKey,
    assetType.asset_id,
    config,
  );
}

async function getERC20WithdrawalBalance(
  signer: Signer,
  ownerKey: string,
  tokenAddress: string,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
): Promise<BigNumber> {
  const assetType = await getEncodeAssetInfo('asset', 'ERC20', encodingApi, {
    token_address: tokenAddress,
  });
  return await getWithdrawalBalance(
    signer,
    ownerKey,
    assetType.asset_id,
    config,
  );
}

async function getERC721WithdrawalBalance(
  signer: Signer,
  ownerKey: string,
  token: ERC721Token,
  encodingApi: EncodingApi,
  mintsApi: MintsApi,
  config: ImmutableXConfiguration,
): Promise<BigNumber> {
  const tokenAddress = token.tokenAddress;
  const tokenId = token.tokenId;
  return await mintsApi
    .getMintableTokenDetailsByClientTokenId({
      tokenAddress,
      tokenId,
    })
    .then(async mintableToken => {
      const assetType = await getEncodeAssetInfo(
        'mintable-asset',
        'ERC721',
        encodingApi,
        {
          id: tokenId,
          token_address: tokenAddress,
          ...(mintableToken.data.blueprint && {
            blueprint: mintableToken.data.blueprint,
          }),
        },
      );
      return await getWithdrawalBalance(
        signer,
        ownerKey,
        assetType.asset_id,
        config,
      );
    })
    .catch(async error => {
      if (error.response?.status === 404) {
        // token is not a mintable ERC721 token
        const assetType = await getEncodeAssetInfo(
          'asset',
          'ERC721',
          encodingApi,
          {
            token_id: token.tokenId,
            token_address: token.tokenAddress,
          },
        );
        return await getWithdrawalBalance(
          signer,
          ownerKey,
          assetType.asset_id,
          config,
        );
      }
      throw error; // unable to recover from any other kind of error
    });
}

export async function getWithdrawalBalanceWorkflow(
  signer: Signer,
  ownerKey: string,
  token: AnyToken,
  encodingApi: EncodingApi,
  mintsApi: MintsApi,
  config: ImmutableXConfiguration,
): Promise<BigNumber> {
  switch (token.type) {
    case 'ETH':
      return await getETHWithdrawalBalance(
        signer,
        ownerKey,
        encodingApi,
        config,
      );
    case 'ERC20':
      return await getERC20WithdrawalBalance(
        signer,
        ownerKey,
        token.tokenAddress,
        encodingApi,
        config,
      );
    case 'ERC721':
      return await getERC721WithdrawalBalance(
        signer,
        ownerKey,
        token,
        encodingApi,
        mintsApi,
        config,
      );
    default:
      throw new Error('Unsupported token type');
  }
}

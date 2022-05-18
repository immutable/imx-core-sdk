import { Signer } from '@ethersproject/abstract-signer';
import {
  EncodeAssetRequestTokenTypeEnum,
  EncodeAssetResponse,
  EncodingApi,
} from '../../api';
import { Core } from '../../contracts';
import { ERC20Withdrawal, TokenType } from '../../types';

export async function completeERC20WithdrawalWorfklow(
  signer: Signer,
  starkPublicKey: string,
  token: ERC20Withdrawal,
  coreContract: Core,
  encodingApi: EncodingApi,
) {
  const assetType = await getEncodeAssetInfo(
    'asset',
    TokenType.ERC20,
    encodingApi,
    {
      token_id: token.data.tokenId,
      token_address: token.data.tokenAddress,
    },
  );
  const populatedTrasaction = await coreContract.populateTransaction.withdraw(
    starkPublicKey,
    assetType.asset_type!,
  );
  return signer.sendTransaction(populatedTrasaction);
}

async function getEncodeAssetInfo(
  assetType: string,
  tokenType: EncodeAssetRequestTokenTypeEnum,
  encodingApi: EncodingApi,
  tokenData?: any,
): Promise<EncodeAssetResponse> {
  const result = await encodingApi.encodeAsset({
    assetType,
    encodeAssetRequest: {
      token: {
        type: tokenType,
        ...(tokenData && { data: tokenData }),
      },
    },
  });
  return result.data;
}

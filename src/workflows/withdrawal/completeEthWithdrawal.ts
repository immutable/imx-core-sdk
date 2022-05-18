import { Signer } from '@ethersproject/abstract-signer';
import {
  EncodeAssetRequestTokenTypeEnum,
  EncodeAssetResponse,
  EncodingApi,
} from '../../api';
import { Core } from '../../contracts';

export async function completeEthWithdrawalWorkflow(
  signer: Signer,
  starkPublicKey: string,
  coreContract: Core,
  encodingApi: EncodingApi,
) {
  const assetType = await getEncodeAssetInfo('asset', 'ETH', encodingApi);
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

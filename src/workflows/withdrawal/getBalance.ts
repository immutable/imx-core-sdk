import { Signer } from '@ethersproject/abstract-signer';
import { EncodingApi } from '../../api';
import { ImmutableXConfiguration } from '../../config';
import { Core__factory } from '../../contracts';
import { getEncodeAssetInfo } from './getEncodeAssetInfo';
import { BigNumber } from 'ethers';

export async function getWithdrawalBalanceWorkflow(
  signer: Signer,
  ownerKey: string,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
): Promise<BigNumber> {
  const assetType = await getEncodeAssetInfo('asset', 'ETH', encodingApi);

  const coreContract = Core__factory.connect(
    config.ethConfiguration.coreContractAddress,
    signer,
  );
  return coreContract.getWithdrawalBalance(ownerKey, assetType.asset_id);
}

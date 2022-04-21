// TODO: Remove
import { AssetsApi } from './api';
import { Configuration } from './api';

const configuration = new Configuration({
  basePath: 'https://api.dev.x.immutable.com',
});

const client = new AssetsApi(configuration);

const getAsset = async () => {

  const getAssetParams = {
    tokenAddress: "0x65bd8f5492ebfd0f2947d298e68a79c65e3d4108",
    tokenId: "7",
    includeFees: true
  }

  return await client.getAsset(getAssetParams)
}

getAsset().then(res => console.log(res))
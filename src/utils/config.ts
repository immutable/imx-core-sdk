import { Configuration } from '../api';
import { Config, EthNetwork } from '../types';

export const getConfig = (network: EthNetwork = 'ropsten'): Config => {
  switch (network) {
    case 'dev':
      return {
        api: new Configuration({
          basePath: process.env.DEV_PUBLIC_API_URL!,
        }),
        starkContractAddress: process.env.DEV_STARK_CONTRACT_ADDRESS!,
      };
    case 'ropsten':
      return {
        api: new Configuration({
          basePath: process.env.ROPSTEN_PUBLIC_API_URL!,
        }),
        starkContractAddress: process.env.ROPSTEN_STARK_CONTRACT_ADDRESS!,
      };
    case 'mainnet':
      return {
        api: new Configuration({
          basePath: process.env.MAINNET_PUBLIC_API_URL!,
        }),
        starkContractAddress: process.env.MAINNET_STARK_CONTRACT_ADDRESS!,
      };
  }
};

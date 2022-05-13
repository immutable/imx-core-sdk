import { Configuration } from '../api';
import { Config, EthNetwork } from '../types';

export const getConfig = (network: EthNetwork): Config => {
  switch (network) {
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

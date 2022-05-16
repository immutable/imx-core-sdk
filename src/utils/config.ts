import { Configuration } from '../api';
import { Config, EthNetwork } from '../types';

export const getConfig = (network: EthNetwork = 'ropsten'): Config => {
  switch (network) {
    case 'dev':
      return {
        api: new Configuration({
          basePath: 'https://api.dev.x.immutable.com',
        }),
        starkContractAddress: '0xd05323731807A35599BF9798a1DE15e89d6D6eF1',
      };
    case 'ropsten':
      return {
        api: new Configuration({
          basePath: 'https://api.ropsten.x.immutable.com',
        }),
        starkContractAddress: '0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef',
      };
    case 'mainnet':
      return {
        api: new Configuration({
          basePath: 'https://api.x.immutable.com',
        }),
        starkContractAddress: '0x5FDCCA53617f4d2b9134B29090C87D01058e27e9',
      };
  }
};

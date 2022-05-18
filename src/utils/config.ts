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
        registrationContractAddress:
          '0x7EB840223a3b1E0e8D54bF8A6cd83df5AFfC88B2',
      };
    case 'ropsten':
      return {
        api: new Configuration({
          basePath: 'https://api.ropsten.x.immutable.com',
        }),
        starkContractAddress: '0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef',
        registrationContractAddress:
          '0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864',
      };
    case 'mainnet':
      return {
        api: new Configuration({
          basePath: 'https://api.x.immutable.com',
        }),
        starkContractAddress: '0x5FDCCA53617f4d2b9134B29090C87D01058e27e9',
        registrationContractAddress:
          '0x72a06bf2a1CE5e39cBA06c0CAb824960B587d64c',
      };
  }
};

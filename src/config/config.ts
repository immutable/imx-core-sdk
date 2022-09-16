import { Configuration, ConfigurationParameters } from '../api';
import { ImmutableXConfiguration, EthConfiguration } from '../types';
import { version } from '../../package.json';

const defaultHeaders = { 'x-sdk-version': `imx-core-sdk-ts-${version}` };

export interface Environment extends EthConfiguration {
  basePath: string;
  headers?: Record<string, string>;
}

const createConfig = ({
  coreContractAddress,
  registrationContractAddress,
  chainID,
  basePath,
  headers,
}: Environment): ImmutableXConfiguration => {
  if (!basePath.trim()) {
    throw Error('basePath can not be empty');
  }

  headers = { ...(headers || {}), ...defaultHeaders };
  const apiConfigOptions: ConfigurationParameters = {
    basePath,
    baseOptions: { headers },
  };

  return {
    apiConfiguration: new Configuration(apiConfigOptions),
    ethConfiguration: {
      coreContractAddress,
      registrationContractAddress,
      chainID,
    },
  };
};

export const Config = {
  get PRODUCTION() {
    return createConfig({
      basePath: 'https://api.ropsten.x.immutable.com',
      chainID: 3,
      coreContractAddress: '0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef',
      registrationContractAddress: '0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864',
    });
  },

  get SANDBOX() {
    return createConfig({
      basePath: 'https://api.sandbox.x.immutable.com',
      chainID: 5,
      coreContractAddress: '0x7917eDb51ecD6CdB3F9854c3cc593F33de10c623',
      registrationContractAddress: '0x1C97Ada273C9A52253f463042f29117090Cd7D83',
    });
  },

  get ROPSTEN() {
    return createConfig({
      basePath: 'https://api.ropsten.x.immutable.com',
      chainID: 3,
      coreContractAddress: '0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef',
      registrationContractAddress: '0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864',
    });
  },

  createConfig: createConfig,
};

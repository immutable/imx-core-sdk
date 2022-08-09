import { Configuration, ConfigurationParameters } from '../api';
import { ImmutableXConfiguration, L1Configuration } from '../types';
import { version } from '../../package.json';

const defaultHeaders = { 'x-sdk-version': `imx-core-sdk-ts-${version}` };

interface Environment extends L1Configuration {
  basePath: string;
}

export const getConfig = (
  env: Environment,
  headers?: Record<string, string>,
): ImmutableXConfiguration => {
  const {
    coreContractAddress,
    registrationContractAddress,
    chainID,
    basePath,
  } = env;
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
    l1Configuration: {
      coreContractAddress,
      registrationContractAddress,
      chainID,
    },
  };
};

export const SandboxEnvironment: Environment = {
  basePath: 'https://api.ropsten.x.immutable.com',
  chainID: 3,
  registrationContractAddress: '0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864',
  coreContractAddress: '0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef',
};

export const ProductionEnvironment: Environment = {
  basePath: 'https://api.x.immutable.com',
  chainID: 1,
  registrationContractAddress: '0x72a06bf2a1CE5e39cBA06c0CAb824960B587d64c',
  coreContractAddress: '0x5FDCCA53617f4d2b9134B29090C87D01058e27e9`',
};

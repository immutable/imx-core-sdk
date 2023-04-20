import {
  Configuration as APIConfiguration,
  ConfigurationParameters,
} from '../api';
import { version } from '../../package.json';

const defaultHeaders = { 'x-sdk-version': `imx-core-sdk-ts-${version}` };

/**
 * The configuration for the Ethereum network
 */
export interface EthConfiguration {
  coreContractAddress: string;
  registrationContractAddress: string;
  chainID: number;
}

/**
 * The configuration for the ImmutableX client
 */
export interface ImmutableXConfiguration {
  /**
   * The configuration for the API client
   */
  apiConfiguration: APIConfiguration;
  /**
   * The configuration for the Ethereum network
   */
  ethConfiguration: EthConfiguration;
}

interface Environment extends EthConfiguration {
  basePath: string;
  headers?: Record<string, string>;
  sdkVersion?: string;
}

const createConfig = ({
  coreContractAddress,
  registrationContractAddress,
  chainID,
  basePath,
  headers,
  sdkVersion,
}: Environment): ImmutableXConfiguration => {
  if (!basePath.trim()) {
    throw Error('basePath can not be empty');
  }

  if (sdkVersion) {
    defaultHeaders['x-sdk-version'] = sdkVersion;
  }

  headers = { ...(headers || {}), ...defaultHeaders };
  const apiConfigOptions: ConfigurationParameters = {
    basePath,
    baseOptions: { headers },
  };

  return {
    apiConfiguration: new APIConfiguration(apiConfigOptions),
    ethConfiguration: {
      coreContractAddress,
      registrationContractAddress,
      chainID,
    },
  };
};

/**
 * Creates a Configuration for the specified environment
 * @returns an ImmutableXConfiguration
 */
export const Config = {
  get PRODUCTION() {
    return createConfig({
      basePath: 'https://api.x.immutable.com',
      chainID: 1,
      coreContractAddress: '0x5FDCCA53617f4d2b9134B29090C87D01058e27e9',
      registrationContractAddress: '0x72a06bf2a1CE5e39cBA06c0CAb824960B587d64c',
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

  createConfig: createConfig,
};

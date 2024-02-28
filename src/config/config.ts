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
  registrationV4ContractAddress: string;
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
  registrationV4ContractAddress,
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
      registrationV4ContractAddress,
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
      registrationV4ContractAddress:
        '0xac88a57943b5BBa1ecd931F8494cAd0B7F717590',
    });
  },

  get SANDBOX() {
    return createConfig({
      basePath: 'https://api.sandbox.x.immutable.com',
      chainID: 11155111,
      coreContractAddress: '0x2d5C349fD8464DA06a3f90b4B0E9195F3d1b7F98',
      registrationContractAddress: '0xDbA6129C02E69405622fAdc3d5A7f8d23eac3b97',
      registrationV4ContractAddress:
        '0xD1527C65c6287EC5ab816D328Eb83bb4CB690e92',
    });
  },

  createConfig: createConfig,
};

export enum ContractVersion {
  V3,
  V4,
  V5,
}

export const contractAddressToVersion = new Map<string, ContractVersion>([
  ['0x5FDCCA53617f4d2b9134B29090C87D01058e27e9', ContractVersion.V3], // Mainnet
  ['0x2d5C349fD8464DA06a3f90b4B0E9195F3d1b7F98', ContractVersion.V3], // Sandbox
]);

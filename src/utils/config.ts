import { Configuration, ConfigurationParameters } from '../api';
import { ImmutableXConfiguration, L1Configuration } from '../types';
import { version } from '../../package.json';

const defaultHeaders = { 'x-sdk-version': `imx-core-sdk-ts-${version}` };

const appendDefaultHeaders = (
  apiConfigOptions: ConfigurationParameters,
): ConfigurationParameters => {
  apiConfigOptions.baseOptions = apiConfigOptions.baseOptions || {};
  apiConfigOptions.baseOptions.headers = {
    ...(apiConfigOptions.baseOptions.headers || {}),
    ...defaultHeaders,
  };
  return apiConfigOptions;
};

interface Environment extends L1Configuration {
  basePath: string;
  headers?: Record<string, string>;
}

export const getConfig = ({
  coreContractAddress,
  registrationContractAddress,
  chainID,
  basePath,
  headers,
}: Environment): ImmutableXConfiguration => {
  if (!basePath.trim()) {
    throw Error('basePath can not be empty');
  }
  const apiConfigOptions = appendDefaultHeaders({
    basePath,
    baseOptions: { headers: headers || {} },
  });
  return {
    apiConfiguration: new Configuration(apiConfigOptions),
    l1Configuration: {
      coreContractAddress,
      registrationContractAddress,
      chainID,
    },
  };
};

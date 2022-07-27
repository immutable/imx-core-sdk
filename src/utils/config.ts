import { Configuration, ConfigurationParameters } from '../api';
import { Config } from '../types';
import { version } from '../../package.json';

const defaultHeaders = { 'x-sdk-version': `imx-core-sdk-ts-${version}` };

type RequiredProperties<T, P extends keyof T> = Omit<T, P> &
  Required<Pick<T, P>>;

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

interface ConfigParams {
  starkContractAddress: string;
  registrationContractAddress: string;
  chainID: number;
  apiConfigOptions: RequiredProperties<ConfigurationParameters, 'basePath'>;
}

export const getConfig = ({
  starkContractAddress,
  registrationContractAddress,
  chainID,
  apiConfigOptions,
}: ConfigParams): Config => {
  if (!apiConfigOptions.basePath?.trim()) {
    throw Error('apiConfigOptions.basePath can not be empty');
  }
  appendDefaultHeaders(apiConfigOptions);
  return {
    api: new Configuration(apiConfigOptions),
    starkContractAddress,
    registrationContractAddress,
    chainID,
  };
};

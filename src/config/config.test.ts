import { Config, ImmutableXConfiguration } from './config';
import { version } from '../../package.json';
import { Configuration } from '../api';

const defaultHeaders = { 'x-sdk-version': `imx-core-sdk-ts-${version}` };

describe('createConfig', () => {
  it('should throw if basePath is whitespace', () => {
    expect(() =>
      Config.createConfig({
        coreContractAddress: '0x1',
        registrationContractAddress: '0x2',
        chainID: 3,
        basePath: ' ',
      }),
    ).toThrowError('basePath can not be empty');
  });

  it('should throw if basePath is empty', () => {
    expect(() =>
      Config.createConfig({
        coreContractAddress: '0x1',
        registrationContractAddress: '0x2',
        chainID: 3,
        basePath: '',
      }),
    ).toThrowError('basePath can not be empty');
  });

  it('should return config', () => {
    const basePath = 'https://api.sandbox.x.immutable.com';
    const coreContractAddress = '0x1';
    const registrationContractAddress = '0x2';
    const chainID = 3;
    const customHeaders = {
      'x-custom-headers': 'x values',
    };
    const expected: ImmutableXConfiguration = {
      apiConfiguration: new Configuration({
        basePath,
        baseOptions: {
          headers: { 'x-custom-headers': 'x values', ...defaultHeaders },
        },
      }),
      ethConfiguration: {
        chainID,
        coreContractAddress,
        registrationContractAddress,
      },
    };

    const actual = Config.createConfig({
      coreContractAddress,
      registrationContractAddress,
      chainID,
      basePath,
      headers: customHeaders,
    });
    expect(actual).toEqual(expected);
  });

  it('config should return optional sdkIdentifier thats provided', () => {
    const sdkIdentifier = `imx-core-sdk-ts-test-1.0.0`;

    const basePath = 'https://api.sandbox.x.immutable.com';
    const coreContractAddress = '0x1';
    const registrationContractAddress = '0x2';
    const chainID = 3;
    const customHeaders = {
      'x-custom-headers': 'x values',
    };
    const expected: ImmutableXConfiguration = {
      apiConfiguration: new Configuration({
        basePath,
        baseOptions: {
          headers: {
            'x-custom-headers': 'x values',
            'x-sdk-version': sdkIdentifier,
          },
        },
      }),
      ethConfiguration: {
        chainID,
        coreContractAddress,
        registrationContractAddress,
      },
    };

    const actual = Config.createConfig({
      coreContractAddress,
      registrationContractAddress,
      chainID,
      basePath,
      headers: customHeaders,
      sdkIdentifier: sdkIdentifier,
    });
    expect(actual).toEqual(expected);
  });
});

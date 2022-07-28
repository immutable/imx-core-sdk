import { getConfig } from './config';
import { version } from '../../package.json';
import { ImmutableXConfiguration } from '../types';
import { Configuration } from '../api';

const defaultHeaders = { 'x-sdk-version': `imx-core-sdk-ts-${version}` };

describe('getConfig', () => {
  it('should throw if basePath is whitespace', () => {
    expect(() =>
      getConfig({
        coreContractAddress: '0x1',
        registrationContractAddress: '0x2',
        chainID: 3,
        basePath: ' ',
      }),
    ).toThrowError('basePath can not be empty');
  });

  it('should throw if basePath is empty', () => {
    expect(() =>
      getConfig({
        coreContractAddress: '0x1',
        registrationContractAddress: '0x2',
        chainID: 3,
        basePath: '',
      }),
    ).toThrowError('basePath can not be empty');
  });

  it('should return config', () => {
    const basePath = 'https://api.ropsten.x.immutable.com';
    const coreContractAddress = '0x1';
    const registrationContractAddress = '0x2';
    const chainID = 3;
    const customHeaders = { 'x-custom-headers': 'x values' };
    const expected: ImmutableXConfiguration = {
      apiConfiguration: new Configuration({
        basePath,
        baseOptions: {
          headers: { ...customHeaders, ...defaultHeaders },
        },
      }),
      l1Configuration: {
        chainID,
        coreContractAddress,
        registrationContractAddress,
      },
    };

    const actual = getConfig({
      coreContractAddress,
      registrationContractAddress,
      chainID,
      basePath,
      headers: customHeaders,
    });
    expect(actual).toEqual(expected);
  });
});

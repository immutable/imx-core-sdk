import { getConfig } from './config';
import { version } from '../../package.json';

const defaultHeaders = { 'x-sdk-version': `imx-core-sdk-ts-${version}` };

describe('getConfig', () => {
  it('should throw if basePath is whitespace', () => {
    expect(() =>
      getConfig({
        starkContractAddress: '0x1',
        registrationContractAddress: '0x2',
        apiConfigOptions: { basePath: ' ' },
      }),
    ).toThrowError('apiConfigOptions.basePath can not be empty');
  });

  it('should throw if basePath is empty', () => {
    expect(() =>
      getConfig({
        starkContractAddress: '0x1',
        registrationContractAddress: '0x2',
        apiConfigOptions: { basePath: '' },
      }),
    ).toThrowError('apiConfigOptions.basePath can not be empty');
  });

  it('should return config', () => {
    const basePath = 'https://api.ropsten.x.immutable.com';
    const starkContractAddress = '0x1';
    const registrationContractAddress = '0x2';
    const customHeaders = { 'x-custom-headers': 'x values' };
    const expected = {
      api: {
        basePath,
        baseOptions: {
          headers: { ...customHeaders, ...defaultHeaders },
        },
      },
      starkContractAddress,
      registrationContractAddress,
    };

    const actual = getConfig({
      starkContractAddress,
      registrationContractAddress,
      apiConfigOptions: {
        basePath,
        baseOptions: { headers: customHeaders },
      },
    });
    expect(actual).toEqual(expected);
  });
});

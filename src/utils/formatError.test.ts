import { Configuration } from '../api';
import { Config, ImmutableXConfiguration } from '../config';
import { ImmutableX } from '../ImmutableX';

describe('formatError', () => {
  it('should format api errors to IMXError', async () => {
    const client = new ImmutableX(Config.SANDBOX);
    await expect(
      client.getAsset({
        tokenAddress: '0',
        tokenId: '0',
      }),
    ).rejects.toThrowError("Asset with address 0 and id '0' not found");
  });

  it('should format axios errors to IMXError', async () => {
    const client = new ImmutableX(Config.SANDBOX);
    await expect(client.getUser('')).rejects.toThrowError(
      'Error: Request failed with status code 405',
    );
  });

  it('should format 404 errors to IMXError', async () => {
    const config: ImmutableXConfiguration = {
      apiConfiguration: new Configuration({
        basePath: 'https://api.sandbox.x.immutable.com/test404',
      }),
      ethConfiguration: {
        coreContractAddress: '',
        registrationContractAddress: '',
        chainID: 3,
      },
    };
    const client = new ImmutableX(config);
    await expect(client.getUser('')).rejects.toThrowError(
      'Error: Request failed with status code 404',
    );
  });
});

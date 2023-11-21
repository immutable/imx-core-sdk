import { Config } from './config';
import { ImmutableX } from './ImmutableX';

describe('ImmutableXClient', () => {
  it('GET starkex contract version', async () => {
    const client = new ImmutableX(Config.SANDBOX);
    const contractVersion = await client.getStarkExContractVersion();
    expect(contractVersion).not.toEqual(0);
  });
});

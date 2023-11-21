import { Config } from './config';
import { ImmutableX } from './ImmutableX';

describe('ImmutableXClient', () => {
  it('GET starkex contract version', async () => {
    const client = new ImmutableX(Config.SANDBOX);
    const contractVersion = await client.getStarkExContractVersion();

    expect(contractVersion).toHaveProperty('version');
    expect(contractVersion).toHaveProperty('message');
    expect(contractVersion.message).not.toBeUndefined();
    expect(contractVersion.message).not.toBeNull();
    expect(contractVersion.version).not.toBeUndefined();
    expect(contractVersion.version).not.toBeNull();
    expect(contractVersion.version).not.toEqual('');
  });
});

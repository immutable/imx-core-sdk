import { Config } from '../../config/config';
import { ImmutableX } from '../../ImmutableX';
import { Wallet } from 'ethers';
import { AlchemyProvider } from '@ethersproject/providers';
import { CreateProjectRequest } from '../../api';

describe('formatError', () => {
  it('should format axios errors to IMXError', async () => {
    const provider = new AlchemyProvider('goerli', undefined);
    const signer = new Wallet('').connect(provider);

    const client = new ImmutableX(Config.SANDBOX);
    const params: CreateProjectRequest = {
      name: 'Test',
      company_name: 'Test',
      contact_email: 'test@immutable.com',
    };

    expect(async () => await client.createProject(signer, params)).toThrowError(
      '',
    );
  });

  it('should format 404 errors to IMXError', async () => {
    const provider = new AlchemyProvider('goerli', undefined);
    const signer = new Wallet('').connect(provider);

    const client = new ImmutableX(Config.SANDBOX);
    const params: CreateProjectRequest = {
      name: 'Test',
      company_name: 'Test',
      contact_email: 'test@immutable.com',
    };

    expect(async () => await client.createProject(signer, params)).toThrowError(
      '',
    );
  });
});

import { Config } from './../config/config';
import { ImmutableX } from '../ImmutableX';
import { Wallet } from 'ethers';
import { AlchemyProvider } from '@ethersproject/providers';
import { CreateProjectRequest } from '../api';

describe('create project', () => {
  it('should break for formatError', async () => {
    const provider = new AlchemyProvider('goerli', undefined);
    const signer = new Wallet('bleh').connect(provider);
    const client = new ImmutableX(Config.SANDBOX);
    try {
      const params: CreateProjectRequest = {
        name: "Matt's Mats",
        company_name: "Matt's Mats",
        contact_email: 'test@immutable.com',
      };
      const p = await client.createProject(signer, params);
      console.log('p: ', p);
    } catch (err) {
      console.log('erorr: ', err);
    }
    // expect(() =>
    //   Config.createConfig({
    //     coreContractAddress: '0x1',
    //     registrationContractAddress: '0x2',
    //     chainID: 3,
    //     basePath: ' ',
    //   }),
    // ).toThrowError('basePath can not be empty');
  });
});

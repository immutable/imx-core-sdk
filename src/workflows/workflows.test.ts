import { Config } from '../config';

import axios from 'axios';
import { Workflows } from './workflows';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getContractVersion', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return contract version 3.0.3', async () => {
    mockedAxios.get.mockImplementation(async path => {
      if (path.includes('starkex-contract-version')) {
        return {
          data: { version: '3.0.3', message: 'test' },
        };
      }
      return { data: undefined };
    });

    const workflows = new Workflows(Config.SANDBOX);
    const contractVersion = await workflows.getStarkExContractVersion();
    expect(contractVersion.data.version).toEqual('3.0.3');
  });

  it('should throw error on 404 response', async () => {
    mockedAxios.get.mockRejectedValueOnce(
      new Error('Request failed with status code 404'),
    );

    const workflows = new Workflows(Config.SANDBOX);
    await expect(workflows.getStarkExContractVersion()).rejects.toThrowError(
      new Error('Request failed with status code 404'),
    );
  });
});

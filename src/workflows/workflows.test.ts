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
    const workflows = new Workflows(Config.SANDBOX);
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        version: '3.0.3',
        message: '',
      },
    });

    const contractVersion = await workflows.getStarkExContractVersion();
    expect(contractVersion.data.version).toEqual('3.0.3');
  });

  it('should throw error on 404 response', async () => {
    const workflows = new Workflows(Config.SANDBOX);
    mockedAxios.get.mockRejectedValueOnce(
      new Error('Request failed with status code 404'),
    );

    await expect(workflows.getStarkExContractVersion()).rejects.toThrowError(
      new Error('Request failed with status code 404'),
    );
  });
});

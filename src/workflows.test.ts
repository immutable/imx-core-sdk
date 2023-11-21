import { Config } from './config';
import { ImmutableX } from './ImmutableX';

import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getContractVersion', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 3 when contract is 3.0.3', async () => {
    const client = new ImmutableX(Config.SANDBOX);
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        version: '3.0.3',
        message: '',
      },
    });
    const contractVersion = await client.getStarkExContractVersion();
    expect(contractVersion).toEqual(3);
  });

  it('should return 0 on 404 error', async () => {
    const client = new ImmutableX(Config.SANDBOX);
    mockedAxios.get.mockRejectedValueOnce({
      data: 'Error: Request failed with status code 404',
    });
    const contractVersion = await client.getStarkExContractVersion();
    expect(contractVersion).toEqual(0);
  });
});

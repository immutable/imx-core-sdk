import { generateStarkPrivateKey } from './stark-curve';

describe('Key generation', () => {
  it('should generate random Stark key', async () => {
    expect(generateStarkPrivateKey()).not.toEqual(generateStarkPrivateKey());
  });
});

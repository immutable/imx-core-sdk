import { generatePrivateKey } from './stark-curve';

describe('Key generation', () => {
  it('should generate random Stark key', async () => {
    expect(generatePrivateKey()).not.toEqual(generatePrivateKey());
  });
});

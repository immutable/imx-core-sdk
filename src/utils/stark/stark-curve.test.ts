import { generatePrivateKey } from './stark-curve';

describe('Key generation', () => {
  it('should generate random Stark key every time', async () => {
    expect(generatePrivateKey()).not.toEqual(generatePrivateKey());
  });
});

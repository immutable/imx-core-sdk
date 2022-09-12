import { createStarkSigner } from './stark-signer';

describe('StarkSigner', () => {
  it('should return correct address', async () => {
    const mockPrivateKey =
      '019b5de47e5fc8f2e8c3415b42a126aadb462637f2feca1df3733fe3f37cf50f';
    const expectedPublicKey =
      '0x0790436373c1d5b7a88ce4fd7ac96591a385b2b6392d1ea44a165f75115b82ac';

    const signer = createStarkSigner(mockPrivateKey);

    expect(signer.getAddress()).toEqual(expectedPublicKey);
  });
});

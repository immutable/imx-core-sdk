import { Errors } from '../../workflows/errors';
import { createStarkSigner } from './starkSigner';

describe('StarkSigner', () => {
  it('should return correct address', async () => {
    const mockPrivateKey =
      '019b5de47e5fc8f2e8c3415b42a126aadb462637f2feca1df3733fe3f37cf50f';
    const expectedPublicKey =
      '0x0790436373c1d5b7a88ce4fd7ac96591a385b2b6392d1ea44a165f75115b82ac';

    const signer = createStarkSigner(mockPrivateKey);

    expect(signer.getAddress()).toEqual(expectedPublicKey);
  });

  it('should sign message and produce expected signature', async () => {
    const privateKey =
      '7CEFD165C3A374AC3E05170D699BF6549E371522883B447B284A3C16FC04CCC';
    const encodedMessage =
      'e2919c6f19f93d3b9e40c1eef10660bd12240a1520793a28ef21a7457037dd';
    const expectedSignature =
      '0x0752063caed87ef11d6e91c4a226ebfe98f190d248b857d882ae331771e6e4620364a2c46e2190bbb243309a40da051b88f0657ea9d1c2ca11510fe18a8a22ae';
    const signer = createStarkSigner(privateKey);

    const signature = await signer.signMessage(encodedMessage);

    expect(signature).toEqual(expectedSignature);
  });

  it('should throw an error if message is too long', async () => {
    const privateKey =
      '7CEFD165C3A374AC3E05170D699BF6549E371522883B447B284A3C16FC04CCC';
    const encodedMessage =
      'e2919c6f19f93d3b9e40c1eef10660bd12240a1520793a28ef21a7457037dd02';

    const signer = createStarkSigner(privateKey);

    expect(signer.signMessage(encodedMessage)).rejects.toThrow(
      new Error(Errors.StarkCurveInvalidMessageLength),
    );
  });
});

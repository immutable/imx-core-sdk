import { grindKey, signMessage, signRaw } from './crypto';
import { getDefaultProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';

describe('signRaw()', () => {
  test('Correctly signs string', async () => {
    const provider = getDefaultProvider('ropsten', {});
    const signer = new Wallet(
      '5c7b4b5cad9a3fc7b1ba235a49cd74e615488a18b0d6a531739fd1062935104d',
    ).connect(provider);
    const timestamp = '1609462141000';

    const result = await signRaw(timestamp, signer);
    expect(result.toString()).toEqual(
      '0x31043c2584b8f20d67c4d895f8e385e0d5c0ecb8bfb34e76874da4c27660c13d0cdbdf4bb9fe6473614d400e90a846ee25271f5a102a5c3162e3f84321a2113a00',
    );
  });
});

describe('signMessage()', () => {
  test('Correctly signs message', async () => {
    const provider = getDefaultProvider('ropsten', {});
    const signer = new Wallet(
      '5c7b4b5cad9a3fc7b1ba235a49cd74e615488a18b0d6a531739fd1062935104d',
    ).connect(provider);
    const message = 'Some message to sign ABC';
    const ethSignature = await signRaw(message, signer);
    const ethAddress = await signer.getAddress();

    const result = await signMessage(message, signer);
    expect(result).toEqual({
      message,
      ethSignature,
      ethAddress,
    });
  });
});

describe('Key grinding', () => {
  it('should produce the correct ground key', () => {
    const privateKey =
      '86F3E7293141F20A8BAFF320E8EE4ACCB9D4A4BF2B4D295E8CEE784DB46E0519';
    expect(grindKey(privateKey)).toEqual(
      '5c8c8683596c732541a59e03007b2d30dbbbb873556fe65b5fb63c16688f941',
    );
  });
});

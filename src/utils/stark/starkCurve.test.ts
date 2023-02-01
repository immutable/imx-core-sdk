import BN from 'bn.js';
import { Wallet } from 'ethers';
import {
  generateLegacyStarkPrivateKey,
  generateStarkPrivateKey,
  grindKey,
  starkEcOrder,
} from './starkCurve';

describe('Key generation', () => {
  it('should generate random Stark key', async () => {
    expect(generateStarkPrivateKey()).not.toEqual(generateStarkPrivateKey());
  });

  it('should generate Legacy Stark key', async () => {
    const signer = new Wallet(
      '5c7b4b5cad9a3fc7b1ba235a49cd74e615488a18b0d6a531739fd1062935104d',
    );
    const starkKey = await generateLegacyStarkPrivateKey(signer);
    expect(starkKey).toEqual(
      '0556413893a023efd75f62cd4eca825f2be7e918b5188f1db06cbec12d7d1b88',
    );
  });
});

describe('Key grinding', () => {
  it('should produce the correct ground key', () => {
    const privateKey = new BN(
      '86F3E7293141F20A8BAFF320E8EE4ACCB9D4A4BF2B4D295E8CEE784DB46E0519',
      16,
    );
    expect(grindKey(privateKey, starkEcOrder)).toEqual(
      '5c8c8683596c732541a59e03007b2d30dbbbb873556fe65b5fb63c16688f941',
    );
  });
  it('should produce the correct ground key when the key starts with zero', () => {
    const privateKey = new BN(
      '086F3E7293141F20A8BAFF320E8EE4ACCB9D4A4BF2B4D295E8CEE784DB46E051',
      16,
    );
    expect(grindKey(privateKey, starkEcOrder)).toEqual(
      '2b2c6db790a95ce05426c3d67247547f1a72d104fd5af24553d42b7557ab082',
    );
  });
  it('should produce the correct ground key when the hex key is less than 64 chars', () => {
    const privateKey = new BN(
      //same as previous test, but without the leading zero
      '86F3E7293141F20A8BAFF320E8EE4ACCB9D4A4BF2B4D295E8CEE784DB46E051',
      16,
    );
    expect(grindKey(privateKey, starkEcOrder)).toEqual(
      '2b2c6db790a95ce05426c3d67247547f1a72d104fd5af24553d42b7557ab082',
    );
  });
});

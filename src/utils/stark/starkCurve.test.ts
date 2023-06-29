import BN from 'bn.js';
import { Wallet } from 'ethers';
import {
  generateLegacyStarkPrivateKey,
  generateStarkPrivateKey,
} from './starkCurve';
import { grindKey } from '../legacy/crypto';
import { createStarkSigner } from './starkSigner';

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

  it('should generate Legacy Stark public key', async () => {
    const signer = new Wallet(
      '5c7b4b5cad9a3fc7b1ba235a49cd74e615488a18b0d6a531739fd1062935104d',
    );
    const starkKey = await generateLegacyStarkPrivateKey(signer);
    const starkPublicKey = createStarkSigner(starkKey).getAddress();
    expect(starkPublicKey).toEqual(
      '0x0579f97e8084dfbbead9bffd750df780e06d8c09a3ba7f40ebe51d46b47df043',
    );
  });

  it('should generate Legacy Stark key', async () => {
    const signer = new Wallet(
      '3c71f6faf4e4a5347a602e3ca60c411caa856f2216dd94230ad4aa8d882a9ec9',
    );
    const starkKey = await generateLegacyStarkPrivateKey(signer);
    const starkPublicKey = createStarkSigner(starkKey).getAddress();
    expect(starkPublicKey).toEqual(
      '0x046bdcc8686bf1c33daf9e8668ddb6e80c266ed8fc59cca8ab102f55838a80c2',
    );
  });
});

describe('Key grinding', () => {
  it('should produce the correct ground key', () => {
    const privateKey = new BN(
      '86F3E7293141F20A8BAFF320E8EE4ACCB9D4A4BF2B4D295E8CEE784DB46E0519',
      16,
    );
    expect(grindKey(privateKey.toString('hex'))).toEqual(
      '5c8c8683596c732541a59e03007b2d30dbbbb873556fe65b5fb63c16688f941',
    );
  });
  it('should produce the correct ground key even if the given private key is above the key limit', () => {
    const privateKey = new BN(
      'a978531943ad2e2a8af34e0e2a7d306dc99516d489be16e4ea2ee74c90a9d88f',
      16,
    );
    expect(grindKey(privateKey.toString('hex'))).toEqual(
      '1e8108d99e74b769d6b998a5a41ff2745f0607496f2eed39abfd161837408e7',
    );
  });
  it('should produce the correct ground key when the key starts with zero', () => {
    const privateKey =
      '086F3E7293141F20A8BAFF320E8EE4ACCB9D4A4BF2B4D295E8CEE784DB46E051';
    expect(grindKey(privateKey)).toEqual(
      '2b2c6db790a95ce05426c3d67247547f1a72d104fd5af24553d42b7557ab082',
    );
  });
});

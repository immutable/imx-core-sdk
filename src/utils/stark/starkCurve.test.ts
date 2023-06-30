import BN from 'bn.js';
import { Wallet } from 'ethers';
import {
  generateLegacyStarkPrivateKey,
  generateStarkPrivateKey,
} from './starkCurve';
import { grindKey } from './legacy/crypto';
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

  it('should generate Legacy Stark key backwards compatible with versions between 1.0.0-beta.3 to 2.0.0', async () => {
    const signer = new Wallet(
      'ba3c969f4957e6bf24e5cf8a931bdba4f90d27c01bb7dff738e4593142826db7',
    );

    const starkKey = await generateLegacyStarkPrivateKey(signer);
    const starkPublicKey = createStarkSigner(starkKey).getAddress();
    expect(starkPublicKey).toEqual(
      '0x04eb684f7318d2b90ef8703e6cd77e362414f4997934ee3c99ee50db3411dfef', // Compatible with GringKeyV1
    );
  });

  it('Eth Private Key hashed with index once, should generate correct legacy stark key', async () => {
    const signer = new Wallet(
      '0x1a245f2fa7c4f04a65d45a3877ad00b1423d081490dcc1a7050c8d7c11ec5c8f',
    );
    const starkKey = await generateLegacyStarkPrivateKey(signer);
    const starkPublicKey = createStarkSigner(starkKey).getAddress();
    expect(starkPublicKey).toEqual(
      '0x034552d72951a700f6e105ac12f5b7977c178be0c32227281f2453b99f3af145', // Index 1
    );
  });

  it('Eth Private Key hashed with index more than once, should generate correct legacy stark key', async () => {
    const signer = new Wallet(
      '0xe516a5b715dc53ba4bf06ed98cbe50897921f45f76d4138f8a7d4ba02a89e10d',
    );
    const starkKey = await generateLegacyStarkPrivateKey(signer);
    const starkPublicKey = createStarkSigner(starkKey).getAddress();
    expect(starkPublicKey).toEqual(
      '0x06cf06df454bdbf37c14671939ff7192f54007e93781e1825e0d12eadb1bde29', // Index 2
    );
  });

  it('Random Eth Private Key hashed with no index, should generate correct legacy stark key', async () => {
    const signer = new Wallet(
      '0x0ac63e2143a49a14a87d865c8d7993806ff16ac1c3288ff97101569881f0d306',
    );
    const starkKey = await generateLegacyStarkPrivateKey(signer);
    const starkPublicKey = createStarkSigner(starkKey).getAddress();
    expect(starkPublicKey).toEqual(
      '0x06e6ac4bb44f3295b881532452f90eccb5601314fafe306db17684b47aa388bd', // Index 0
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

import { ec } from 'elliptic';
import * as encUtils from 'enc-utils';
import { StarkSigner } from '../../types';
import { fixMessage, starkEc } from './stark-curve';
import { getStarkPublicKey } from './stark-curve';

class StandardStarkSigner implements StarkSigner {
  constructor(private keyPair: ec.KeyPair) {}

  public getAddress(): string {
    return getStarkPublicKey(this.keyPair);
  }

  public async signMessage(msg: string): Promise<string> {
    return this.serialize(this.keyPair.sign(fixMessage(msg)));
  }

  private serialize(sig: ec.Signature): string {
    return encUtils.addHexPrefix(
      encUtils.padLeft(sig.r.toString(16), 64) +
        encUtils.padLeft(sig.s.toString(16), 64),
    );
  }
}

export function createStarkSigner(privateKey: string): StarkSigner {
  const keyPair = starkEc.keyFromPrivate(privateKey, 'hex');
  return new StandardStarkSigner(keyPair);
}

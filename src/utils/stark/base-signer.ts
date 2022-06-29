import { ec } from 'elliptic';
import * as encUtils from 'enc-utils';
import { L2Signer } from '../../types';
import { fixMessage } from './stark-curve';


export class BaseSigner implements L2Signer {
  constructor(private keyPair: ec.KeyPair) {}

  public getAddress(): string {
    return this.keyPair.getPublic(true, 'hex');
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

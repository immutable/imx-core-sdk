import { generateStarkWallet } from './stark-key';

import { ec } from 'elliptic';
import * as encUtils from 'enc-utils';
import { StarkSigner } from '../../types';
import { fixMessage } from './stark-curve';
import { getStarkPublicKey } from './stark-key';
import { Signer } from '@ethersproject/abstract-signer';

export class StandardStarkSigner implements StarkSigner {
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

export async function generateStarkSigner(
  ethSigner: Signer,
): Promise<StarkSigner> {
  const starkWallet = await generateStarkWallet(ethSigner);
  return new StandardStarkSigner(starkWallet.starkKeyPair);
}

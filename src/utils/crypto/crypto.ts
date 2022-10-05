import BN from 'bn.js';
import * as encUtils from 'enc-utils';
import { Signer } from '@ethersproject/abstract-signer';

type SignatureOptions = {
  r: BN;
  s: BN;
  recoveryParam: number | null | undefined;
};

// used to sign message with L1 keys. Used for registration
function serializeEthSignature(sig: SignatureOptions): string {
  // This is because golang appends a recovery param
  // https://github.com/ethers-io/ethers.js/issues/823
  return encUtils.addHexPrefix(
    encUtils.padLeft(sig.r.toString(16), 64) +
      encUtils.padLeft(sig.s.toString(16), 64) +
      encUtils.padLeft(sig.recoveryParam?.toString(16) || '', 2),
  );
}

function importRecoveryParam(v: string): number | undefined {
  return v.trim()
    ? new BN(v, 16).cmp(new BN(27)) !== -1
      ? new BN(v, 16).sub(new BN(27)).toNumber()
      : new BN(v, 16).toNumber()
    : undefined;
}

// used chained with serializeEthSignature. serializeEthSignature(deserializeSignature(...))
function deserializeSignature(sig: string, size = 64): SignatureOptions {
  sig = encUtils.removeHexPrefix(sig);
  return {
    r: new BN(sig.substring(0, size), 'hex'),
    s: new BN(sig.substring(size, size * 2), 'hex'),
    recoveryParam: importRecoveryParam(sig.substring(size * 2, size * 2 + 2)),
  };
}

export async function signRaw(
  payload: string,
  signer: Signer,
): Promise<string> {
  const signature = deserializeSignature(await signer.signMessage(payload));
  return serializeEthSignature(signature);
}

type IMXAuthorisationHeaders = {
  timestamp: string;
  signature: string;
};

export async function generateIMXAuthorisationHeaders(
  ethSigner: Signer,
): Promise<IMXAuthorisationHeaders> {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signature = await signRaw(timestamp, ethSigner);

  return {
    timestamp,
    signature,
  };
}

export async function signMessage(
  message: string,
  signer: Signer,
): Promise<{ message: string; ethAddress: string; ethSignature: string }> {
  const ethAddress = await signer.getAddress();
  const ethSignature = await signRaw(message, signer);
  return {
    message,
    ethAddress,
    ethSignature,
  };
}

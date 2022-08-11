declare module '@starkware-industries/starkware-crypto-utils' {
  import BN from 'bn.js';
  import { ec } from 'elliptic';
  declare var _ec: ec;
  function verify(
    publicKey: ec.KeyPair,
    msgHash: string,
    msgSignature: ec.Signature,
  ): boolean;
  function sign(privateKey: string, msgHash: string): string;
  function getPrivateKeyFromEthSignature(ethSignature: string): string;
  function getAccountPath(
    layer: string,
    application: string,
    ethereumAddress: string,
    index: string,
  ): string;
  function grindKey(keySeed: string, keyValLimit: BN): string;
  export default {
    ec: _ec,
    sign,
    verify,
    keyDerivation: {
      getAccountPath,
      // getPrivateKeyFromEthSignature,
      // grindKey,
    },
    // asset: {
    //   getAssetType,
    //   getAssetId, // Function.
    // },
  };
}

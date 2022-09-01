declare module '@starkware-industries/starkware-crypto-utils' {
  // import BN from 'bn.js';
  // import { ec } from 'elliptic';
  // declare var _ec: ec;
  function getPrivateKeyFromEthSignature(ethSignature: string): string;
  function privateToStarkKey(privateKey: string): string;
  function getAccountPath(
    layer: string,
    application: string,
    ethereumAddress: string,
    index: string,
  ): string;
  function getKeyPairFromPath(mnemonic: string, path: string): Ec.KeyPair;
  export default {
    // ec: _ec,
    sign,
    verify,
    keyDerivation: {
      getAccountPath,
      getPrivateKeyFromEthSignature,
      privateToStarkKey,
      getKeyPairFromPath,
    },
  };
}

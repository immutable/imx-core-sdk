import { getAccountPath, getKeyPairFromPath } from './stark-key';

const layer = 'starkex';
const application = 'starkdeployement';

const seed = '0xed43abe2785ca9dfe74a2a8b05feaf2cdd4eda6847914674f88f5f114c3b694d4ae930dd3808088ce40143430157ed79a66d7ff8d4919bd833d31d4a0f16f441';
const ethAddress = '0xa4864d977b944315389d1765ffa7e66F74ee8cd7';

describe('Key derivation', () => {
  it('should derive key from mnemonic and eth-address correctly', () => {
    const index = '0';
    const path = getAccountPath(layer, application, ethAddress, index);
    const keyPair = getKeyPairFromPath(seed, path);
    expect(keyPair.getPrivate('hex')).toEqual(
      '06cf0a8bf113352eb863157a45c5e5567abb34f8d32cddafd2c22aa803f4892c',
    );
  });
});

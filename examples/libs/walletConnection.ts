import { EtherscanProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { createStarkSigner, WalletConnection } from '@imtbl/core-sdk';
import { requireEnvironmentVariable } from './utils';

/**
 * Generate a ethSigner/starkSigner object from a private key.
 */
export const generateWalletConnection = async (
  ethNetwork: string,
): Promise<WalletConnection> => {
  const userPrivateKey = requireEnvironmentVariable('PRIVATE_KEY');
  const userStarkKey = requireEnvironmentVariable('STARK_PRIVATE_KEY');
  const etherscanKey = requireEnvironmentVariable('ETHERSCAN_API_KEY');

  // connect provider
  const provider = new EtherscanProvider(ethNetwork, etherscanKey);

  // L1 credentials
  const ethSigner = new Wallet(userPrivateKey).connect(provider);

  // L2 credentials
  const starkSigner = createStarkSigner(userStarkKey);

  return {
    ethSigner,
    starkSigner,
  };
};

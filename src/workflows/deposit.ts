import { Signer } from '@ethersproject/abstract-signer';
import { DepositsApi } from '../api';
import { parseEther } from 'ethers/lib/utils';
import { Bytes32 } from 'soltypes';
import { Core, Core__factory } from '../contracts';
import { generateStarkWallet } from '../utils';

// TODO move to types
export enum TokenType {
  ETH = 'ETH',
}

const ethToken = {
  type: TokenType.ETH,
  data: {
    decimals: 18,
  },
};

// const FlatETHTokenCodec = t.interface({
//   type: ETHTokenTypeT,
// });

// const FlatETHTokenWithAmountCodec = t.intersection([
//   FlatETHTokenCodec,
//   t.interface({ amount: PositiveNumberStringC }),
// ]);

// export type FlatETHToken = t.TypeOf<typeof FlatETHTokenCodec>;

// const FlatERC721TokenCodec = t.interface({
//   type: ERC721TokenTypeT,
//   tokenId: t.string,
//   tokenAddress: EthAddress,
// });

// export type FlatERC721Token = t.TypeOf<typeof FlatERC721TokenCodec>;

// const FlatERC20TokenCodec = t.interface({
//   type: ERC20TokenTypeT,
//   tokenAddress: EthAddress,
//   symbol: t.string,
// });

// export type FlatERC20Token = t.TypeOf<typeof FlatERC20TokenCodec>;

// const FlatERC20TokenWithAmountCodec = t.intersection([
//   FlatERC20TokenCodec,
//   t.interface({ amount: PositiveNumberStringC }),
// ]);

// export const FlatTokenCodec = t.union([
//   FlatETHTokenCodec,
//   FlatERC721TokenCodec,
//   FlatERC20TokenCodec,
// ]);
// export type FlatToken = t.TypeOf<typeof FlatTokenCodec>;
// export type FlatTokenTS = t.OutputOf<typeof FlatTokenCodec>;

// export const FlatTokenWithAmountCodec = t.union([
//   FlatETHTokenWithAmountCodec,
//   FlatERC721TokenCodec,
//   FlatERC20TokenWithAmountCodec,
// ]);
// export type FlatTokenWithAmount = t.TypeOf<typeof FlatTokenWithAmountCodec>;
// export type FlatTokenWithAmountTS = t.OutputOf<typeof FlatTokenWithAmountCodec>;

const contractAddress = process.env.STARK_CONTRACT_ADDRESS!;

export async function isRegisteredOnChain(
  signer: Signer,
  contract: Core,
): Promise<boolean> {
  // Obtain stark key pair associated with this user
  const starkWallet = await generateStarkWallet(signer);
  let ethKey;
  try {
    ethKey = await contract.getEthKey(starkWallet.starkPublicKey);
  } catch (error) {
    return false;
  }
  return ethKey !== '';
}

// TODO registerAndDepositERC20
// TODO registerAndDepositEth
// TODO register, depositNft
export async function depositWorkflow(
  signer: Signer,
  amount: string,
  depositsApi: DepositsApi,
): Promise<string> {
  // Get instance of contract
  const coreContract = Core__factory.connect(contractAddress!, signer);

  // Check if user is registered onchain
  const isRegistered = await isRegisteredOnChain(signer, coreContract);

  if (!isRegistered) {
    return executeDeposit(signer, amount, depositsApi, coreContract);
  } else {
    return executeDeposit(signer, amount, depositsApi, coreContract);
  }
}

export async function executeDeposit(
  signer: Signer,
  amount: string,
  depositsApi: DepositsApi,
  contract: Core,
): Promise<string> {
  const userAddress = (await signer.getAddress()).toLowerCase();

  // Get signable details for offchain registration
  const signableDepositResult = await depositsApi.getSignableDeposit({
    getSignableDepositRequest: {
      user: userAddress,
      token: ethToken,
      amount: parseEther(amount).toString(),
    },
  });

  // TODO move to encode/{asset} backend
  const assetType = new Bytes32(signableDepositResult.data.asset_id!).toUint()
    .val;
  const starkPublicKey = signableDepositResult.data.stark_key!;
  const vaultId = signableDepositResult.data.vault_id!;

  const trx = await contract.populateTransaction[
    'deposit(uint256,uint256,uint256)'
  ](starkPublicKey, assetType, vaultId);

  return signer
    .sendTransaction({ ...trx, value: parseEther(amount) })
    .then(res => res.hash);
}

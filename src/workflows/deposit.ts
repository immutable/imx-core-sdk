import { Signer } from '@ethersproject/abstract-signer';
import { DepositsApi } from '../api';
import { parseEther } from 'ethers/lib/utils';
import { Bytes32 } from 'soltypes';
import { Core__factory } from '../contracts';

// TODO move to types
const ethToken = {
  type: 'ETH',
  data: {
    decimals: 18,
  },
};

const contractAddress = process.env.STARK_CONTRACT_ADDRESS!;

export async function depositEthWorkflow(
  signer: Signer,
  amount: string,
  depositsApi: DepositsApi,
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

  // Get instance of contract
  const coreContract = Core__factory.connect(contractAddress!, signer);

  const trx = await coreContract.populateTransaction[
    'deposit(uint256,uint256,uint256)'
  ](starkPublicKey, assetType, vaultId);

  return signer
    .sendTransaction({ ...trx, value: parseEther(amount) })
    .then(res => res.hash);
}

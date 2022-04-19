import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from 'ethers';
import { Core } from './contracts/Core';
import { Core__factory } from './contracts/factories/Core__factory';
import * as dotenv from 'dotenv';

dotenv.config();
console.log(process.env);

// Test example
const provider = new AlchemyProvider(
  process.env.ETH_NETWORK,
  process.env.ALCHEMY_API_KEY,
);
const wallet = new Wallet(process.env.PRIVATE_KEY!, provider);
const contractAddress = process.env.STARK_CONTRACT_ADDRESS!;
const testStarkKey = process.env.USER_STARK_KEY!;

export class CoreContract {
  private core: Core;
  constructor() {
    this.core = Core__factory.connect(contractAddress, wallet);
  }

  public async isRegisteredOnChain(): Promise<boolean> {
    let ethKey;
    try {
      ethKey = await this.core.getEthKey(testStarkKey);
    } catch (error) {
      console.log('isRegisteredOnChain', false);
      return false;
    }
    console.log('isRegisteredOnChain', ethKey !== '');
    return ethKey !== '';
  }
}

const core = new CoreContract();
core.isRegisteredOnChain();

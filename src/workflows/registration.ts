import { ImmutableXConfiguration } from '..';
import {
  UsersApi,
  GetSignableRegistrationResponse,
  RegisterUserResponse,
} from '../api';
import { StarkSigner, WalletConnection } from '../types';
import { serializePackedSignature, signRaw, starkEcOrder } from '../utils';
import { Registration, StarkV4__factory } from '../contracts';
import { solidityKeccak256 } from 'ethers/lib/utils';
import BN from 'bn.js';
import * as encUtils from 'enc-utils';
import { ec } from 'elliptic';
import { TransactionResponse } from '@ethersproject/providers';

type registerOffchainWorkflowParams = WalletConnection & {
  usersApi: UsersApi;
};

export async function registerOffchainWorkflow({
  ethSigner,
  starkSigner,
  usersApi,
}: registerOffchainWorkflowParams): Promise<RegisterUserResponse> {
  const userAddress = await ethSigner.getAddress();
  const starkPublicKey = await starkSigner.getAddress();

  const signableResult = await usersApi.getSignableRegistrationOffchain({
    getSignableRegistrationRequest: {
      ether_key: userAddress,
      stark_key: starkPublicKey,
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableResult.data;

  const ethSignature = await signRaw(signableMessage, ethSigner);

  const starkSignature = await starkSigner.signMessage(payloadHash);

  const registeredUser = await usersApi.registerUser({
    registerUserRequest: {
      eth_signature: ethSignature,
      ether_key: userAddress,
      stark_signature: starkSignature,
      stark_key: starkPublicKey,
    },
  });

  return registeredUser.data;
}

interface IsRegisteredCheckError {
  reason: string;
}

export async function isRegisteredOnChainWorkflow(
  starkPublicKey: string,
  contract: Registration,
): Promise<boolean> {
  try {
    return await contract.isRegistered(starkPublicKey);
  } catch (ex) {
    if ((ex as IsRegisteredCheckError).reason === 'USER_UNREGISTERED') {
      return false;
    }
    throw ex;
  }
}

export async function getSignableRegistrationOnchain(
  etherKey: string,
  starkPublicKey: string,
  usersApi: UsersApi,
): Promise<GetSignableRegistrationResponse> {
  const response = await usersApi.getSignableRegistration({
    getSignableRegistrationRequest: {
      ether_key: etherKey,
      stark_key: starkPublicKey,
    },
  });
  return {
    operator_signature: response.data.operator_signature,
    payload_hash: response.data.payload_hash,
    readable_transaction: response.data.readable_transaction,
    verification_signature: response.data.verification_signature,
  };
}

export async function signRegisterEthAddress(
  starkSigner: StarkSigner,
  ethAddress: string,
  starkPublicKey: string,
): Promise<string> {
  const hash: string = solidityKeccak256(
    ['string', 'address', 'uint256'],
    ['UserRegistration:', ethAddress, starkPublicKey],
  );
  const msgHash: BN = new BN(encUtils.removeHexPrefix(hash), 16);
  const modMsgHash: BN = msgHash.mod(starkEcOrder);
  const signature: ec.Signature = await starkSigner.sign(
    modMsgHash.toString(16),
  );
  const pubY: string = encUtils.sanitizeHex(starkSigner.getYCoordinate());
  return serializePackedSignature(signature, pubY);
}

export async function registerOnchainWorkflow(
  walletConnection: WalletConnection,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  const ethAddress = await walletConnection.ethSigner.getAddress();
  const starkPublicKey = await walletConnection.starkSigner.getAddress();

  const signature = await signRegisterEthAddress(
    walletConnection.starkSigner,
    ethAddress,
    starkPublicKey,
  );

  const contract = StarkV4__factory.connect(
    config.ethConfiguration.coreContractAddress,
    walletConnection.ethSigner,
  );

  const populatedTransaction =
    await contract.populateTransaction.registerEthAddress(
      ethAddress,
      starkPublicKey,
      signature,
    );

  return walletConnection.ethSigner.sendTransaction(populatedTransaction);
}

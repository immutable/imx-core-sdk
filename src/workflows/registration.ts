import { Signer } from '@ethersproject/abstract-signer';
import { serializeSignature, sign, signRaw } from '../utils';
import {
  GetSignableRegistrationResponse,
  RegisterUserResponse,
  UsersApi,
} from '../api';
import { Registration } from '../contracts';
import { L2Signer, StarkWallet } from '../types';

/** @deprecated */
export async function registerOffchainWorkflow(
  signer: Signer,
  starkWallet: StarkWallet,
  usersApi: UsersApi,
): Promise<RegisterUserResponse> {
  const userAddress = await signer.getAddress();

  // Get signable details for offchain registration
  const signableResult = await usersApi.getSignableRegistrationOffchain({
    getSignableRegistrationRequest: {
      ether_key: userAddress,
      stark_key: starkWallet.starkPublicKey,
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableResult.data;

  // Sign message with L1 credentials
  const ethSignature = await signRaw(signableMessage, signer);

  // Sign hash with L2 credentials
  const starkSignature = serializeSignature(
    sign(starkWallet.starkKeyPair, payloadHash),
  );

  // Send request for user registration offchain
  const response = await usersApi.registerUser({
    registerUserRequest: {
      eth_signature: ethSignature,
      ether_key: userAddress,
      stark_signature: starkSignature,
      stark_key: starkWallet.starkPublicKey,
    },
  });

  return {
    tx_hash: response.data.tx_hash,
  };
}

export async function registerOffchainWorkflowWithSigner(
  l1Signer: Signer,
  l2Signer: L2Signer,
  usersApi: UsersApi,
): Promise<void> {
  const userAddress = await l1Signer.getAddress();
  const starkPublicKey = l2Signer.getAddress();

  if (await isUserRegistered(userAddress, usersApi)) {
    return;
  }

  // Get signable details for offchain registration
  const signableResult = await usersApi.getSignableRegistrationOffchain({
    getSignableRegistrationRequest: {
      ether_key: userAddress,
      stark_key: starkPublicKey,
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableResult.data;

  // Sign message with L1 credentials
  const ethSignature = await signRaw(signableMessage, l1Signer);

  // Sign hash with L2 credentials
  const starkSignature = await l2Signer.signMessage(payloadHash);

  // Send request for user registration offchain
  await usersApi.registerUser({
    registerUserRequest: {
      eth_signature: ethSignature,
      ether_key: userAddress,
      stark_signature: starkSignature,
      stark_key: starkPublicKey,
    },
  });

  return;
}

export async function isRegisteredOnChainWorkflow(
  starkPublicKey: string,
  contract: Registration,
): Promise<boolean> {
  return await contract.isRegistered(starkPublicKey);
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
  };
}

async function isUserRegistered(
  userAddress: string,
  usersApi: UsersApi,
): Promise<boolean> {
  try {
    await usersApi.getUsers({ user: userAddress });
    return true;
  } catch (error) {
    return false;
  }
}

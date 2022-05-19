import { Signer } from '@ethersproject/abstract-signer';
import {
  generateStarkWallet,
  serializeSignature,
  sign,
  signRaw,
} from '../utils';
import {
  GetSignableRegistrationResponse,
  RegisterUserResponse,
  UsersApi,
} from '../api';
import { Registration } from '../contracts';
import { Errors } from './errors';

export async function registerOffchainWorkflow(
  signer: Signer,
  usersApi: UsersApi,
): Promise<RegisterUserResponse> {
  // L2 credentials
  // Obtain stark key pair associated with this user
  const starkWallet = await generateStarkWallet(signer);

  const userAddress = (await signer.getAddress()).toLowerCase();

  // Get signable details for offchain registration
  const signableResult = await usersApi.getSignableRegistrationOffchain({
    getSignableRegistrationRequest: {
      ether_key: userAddress,
      stark_key: starkWallet.starkPublicKey,
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableResult.data;

  if (signableMessage === undefined || payloadHash === undefined) {
    throw new Error(Errors.SignableRegistrationOffchainInvalidResponse);
  }

  // Sign message with L1 credentials
  const ethSignature = await signRaw(signableMessage, signer);

  // Sign hash with L2 credentials
  const starkSignature = serializeSignature(
    sign(starkWallet.starkKeyPair, payloadHash),
  );

  // Send request for user registratin offchain
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
      ether_key: etherKey.toLowerCase(),
      stark_key: starkPublicKey,
    },
  });
  return {
    operator_signature: response.data.operator_signature,
    payload_hash: response.data.payload_hash,
  };
}

import {
  UsersApi,
  GetSignableRegistrationResponse,
  RegisterUserResponse,
} from '../api';
import { ResolvedSigners } from '../types';
import { signRaw } from '../utils';
import { Registration } from '../contracts';

type registerOffchainWorkflowParams = {
  signers: ResolvedSigners;
  usersApi: UsersApi;
};

export async function registerOffchainWorkflow({
  signers: { ethSigner, starkExSigner },
  usersApi,
}: registerOffchainWorkflowParams): Promise<RegisterUserResponse> {
  const userAddress = await ethSigner.getAddress();
  const starkPublicKey = await starkExSigner.getAddress();

  const signableResult = await usersApi.getSignableRegistrationOffchain({
    getSignableRegistrationRequest: {
      ether_key: userAddress,
      stark_key: starkPublicKey,
    },
  });

  const {
    signable_message: signableMessage,
    payload_hash: payloadHash,
    readable_transaction: readableTransaction,
    verification_signature: verificationSignature,
  } = signableResult.data;

  const ethSignature = await signRaw(signableMessage, ethSigner);

  const starkSignature = await starkExSigner.signMessage({
    message: payloadHash,
    payload: readableTransaction,
    signature: verificationSignature,
  });

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
  };
}

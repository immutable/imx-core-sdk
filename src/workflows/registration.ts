import { Signer } from '@ethersproject/abstract-signer';
import {
  generateStarkWallet,
  serializeSignature,
  sign,
  signRaw,
} from '../utils';
import { RegisterUserResponse, UsersApi } from '../api';
import { Core } from '../contracts';

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
    throw new Error('Invalid response from Signable registration offchain');
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

import {
  TransfersApi,
  CreateTransferResponseV1,
  CreateTransferResponse,
} from '../api';
import {
  NftTransferDetails,
  ResolvedSigners,
  UnsignedTransferRequest,
} from '../types';
import { signRaw } from '../utils';
import { convertToSignableToken } from '../utils/convertToSignableToken';

type TransfersWorkflowParams = {
  signers: ResolvedSigners;
  request: UnsignedTransferRequest;
  transfersApi: TransfersApi;
};

type BatchTransfersWorkflowParams = {
  signers: ResolvedSigners;
  request: Array<NftTransferDetails>;
  transfersApi: TransfersApi;
};

export async function transfersWorkflow({
  signers: { ethSigner, starkExSigner },
  request,
  transfersApi,
}: TransfersWorkflowParams): Promise<CreateTransferResponseV1> {
  const ethAddress = await ethSigner.getAddress();

  const transferAmount = request.type === 'ERC721' ? '1' : request.amount;
  const signableResult = await transfersApi.getSignableTransferV1({
    getSignableTransferRequest: {
      sender: ethAddress,
      token: convertToSignableToken(request),
      amount: transferAmount,
      receiver: request.receiver,
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
    payload: readableTransaction,
    message: payloadHash,
    signature: verificationSignature,
  });

  const transferSigningParams = {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    sender_stark_key: signableResult.data.sender_stark_key!,
    sender_vault_id: signableResult.data.sender_vault_id,
    receiver_stark_key: signableResult.data.receiver_stark_key,
    receiver_vault_id: signableResult.data.receiver_vault_id,
    asset_id: signableResult.data.asset_id,
    amount: signableResult.data.amount,
    nonce: signableResult.data.nonce,
    expiration_timestamp: signableResult.data.expiration_timestamp,
    stark_signature: starkSignature,
  };

  const response = await transfersApi.createTransferV1({
    createTransferRequest: transferSigningParams,
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  });

  return {
    sent_signature: response?.data.sent_signature,
    status: response?.data.status?.toString(),
    time: response?.data.time,
    transfer_id: response?.data.transfer_id,
  };
}

export async function batchTransfersWorkflow({
  signers: { ethSigner, starkExSigner },
  request,
  transfersApi,
}: BatchTransfersWorkflowParams): Promise<CreateTransferResponse> {
  const ethAddress = await ethSigner.getAddress();

  const signableRequests = request.map(nftTransfer => {
    return {
      amount: '1',
      token: convertToSignableToken({
        type: 'ERC721',
        tokenId: nftTransfer.tokenId,
        tokenAddress: nftTransfer.tokenAddress,
      }),
      receiver: nftTransfer.receiver,
    };
  });

  const signableResult = await transfersApi.getSignableTransfer({
    getSignableTransferRequestV2: {
      sender_ether_key: ethAddress,
      signable_requests: signableRequests,
    },
  });

  const signableMessage = signableResult.data.signable_message;

  if (signableMessage === undefined) {
    throw new Error('Invalid response from Signable registration offchain');
  }

  const ethSignature = await signRaw(signableMessage, ethSigner);

  const requests = [];
  for (const resp of signableResult.data.signable_responses) {
    const starkSignature = await starkExSigner.signMessage({
      message: resp.payload_hash,
      payload: resp.readable_transaction,
      signature: resp.verification_signature,
    });

    const req = {
      sender_vault_id: resp.sender_vault_id,
      receiver_stark_key: resp.receiver_stark_key,
      receiver_vault_id: resp.receiver_vault_id,
      asset_id: resp.asset_id,
      amount: resp.amount,
      nonce: resp.nonce,
      expiration_timestamp: resp.expiration_timestamp,
      stark_signature: starkSignature,
    };
    requests.push(req);
  }

  // TODO: throw error on missing payload hash?
  const transferSigningParams = {
    sender_stark_key: signableResult.data.sender_stark_key,
    requests,
  };

  const response = await transfersApi.createTransfer({
    createTransferRequestV2: transferSigningParams,
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  });

  return {
    transfer_ids: response?.data.transfer_ids,
  };
}

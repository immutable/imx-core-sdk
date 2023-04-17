import {
  CreateTransferResponse,
  CreateTransferResponseV1,
  TransfersApi,
} from '../api';
import {
  NftTransferDetails,
  UnsignedTransferRequest,
  WalletConnection,
} from '../types';
import { signRaw } from '../utils';
import { convertToSignableToken } from '../utils/convertToSignableToken';

type TransfersWorkflowParams = WalletConnection & {
  request: UnsignedTransferRequest;
  transfersApi: TransfersApi;
};

type BatchTransfersWorkflowParams = WalletConnection & {
  request: Array<NftTransferDetails>;
  transfersApi: TransfersApi;
};

export async function transfersWorkflow({
  ethSigner,
  starkSigner,
  request,
  transfersApi,
}: TransfersWorkflowParams): Promise<CreateTransferResponseV1> {
  const ethAddress = await ethSigner.getAddress();

  const transferAmount = request.type === 'ERC721' ? '1' : request.amount;
  const signableResult = await transfersApi.getSignableTransferV1({
    getSignableTransferRequest: {
      sender_ether_key: ethAddress,
      signable_requests: [
        {
          token: convertToSignableToken(request),
          amount: transferAmount,
          receiver: request.receiver,
        },
      ],
    },
  });

  const {
    signable_message: signableMessage,
    signable_responses: signableResponses,
  } = signableResult.data;

  const ethSignature = await signRaw(signableMessage, ethSigner);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const res = signableResponses.find(x => x)!;

  const starkSignature = await starkSigner.signMessage(res.payload_hash);

  const transferSigningParams = {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    sender_stark_key: signableResult.data.sender_stark_key!,
    sender_vault_id: res.sender_vault_id,
    receiver_stark_key: res.receiver_stark_key,
    receiver_vault_id: res.receiver_vault_id,
    asset_id: res.asset_id,
    amount: res.amount,
    nonce: res.nonce,
    expiration_timestamp: res.expiration_timestamp,
    stark_signature: starkSignature,
  };

  const response = await transfersApi.createTransferV1({
    createTransferRequest: transferSigningParams,
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  });

  // TODO: Ask passport team?
  return {
    sent_signature: ethSignature,
    transfer_id: response.data.transfer_ids[0],
    status: '',
    time: 0,
    // sent_signature: response?.data.sent_signature,
    // status: response?.data.status?.toString(),
    // time: response?.data.time,
    // transfer_id: response?.data.transfer_id,
  };
}

export async function batchTransfersWorkflow({
  ethSigner,
  starkSigner,
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
    const starkSignature = await starkSigner.signMessage(resp.payload_hash);
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

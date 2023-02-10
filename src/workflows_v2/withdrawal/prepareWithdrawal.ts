import { WithdrawalsApi, CreateWithdrawalResponse } from '../../api';
import { ResolvedSigners, TokenAmount } from '../../types';
import { signMessage } from '../../utils';
import { convertToSignableToken } from '../../utils/convertToSignableToken';

const assertIsDefined = <T>(value?: T): T => {
  if (value !== undefined) return value;
  throw new Error('undefined field exception');
};

type PrepareWithdrawalWorkflowParams = TokenAmount & {
  signers: ResolvedSigners;
  withdrawalsApi: WithdrawalsApi;
};

export async function prepareWithdrawalWorkflow(
  params: PrepareWithdrawalWorkflowParams,
): Promise<CreateWithdrawalResponse> {
  const {
    signers: { ethSigner, starkExSigner },
    withdrawalsApi,
  } = params;
  const withdrawalAmount = params.type === 'ERC721' ? '1' : params.amount;
  const signableWithdrawalResult = await withdrawalsApi.getSignableWithdrawal({
    getSignableWithdrawalRequest: {
      user: await ethSigner.getAddress(),
      token: convertToSignableToken(params),
      amount: withdrawalAmount,
    },
  });

  const {
    signable_message: signableMessage,
    payload_hash: payloadHash,
    readable_transaction: readableTransaction,
    verification_signature: verificationSignature,
  } = signableWithdrawalResult.data;

  const starkSignature = await starkExSigner.signMessage({
    message: payloadHash,
    payload: readableTransaction,
    signature: verificationSignature,
  });

  const { ethAddress, ethSignature } = await signMessage(
    signableMessage,
    ethSigner,
  );

  const prepareWithdrawalResponse = await withdrawalsApi.createWithdrawal({
    createWithdrawalRequest: {
      stark_key: assertIsDefined(signableWithdrawalResult.data.stark_key),
      amount: withdrawalAmount,
      asset_id: assertIsDefined(signableWithdrawalResult.data.asset_id),
      vault_id: assertIsDefined(signableWithdrawalResult.data.vault_id),
      nonce: assertIsDefined(signableWithdrawalResult.data.nonce),
      stark_signature: starkSignature,
    },
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  });

  return prepareWithdrawalResponse.data;
}

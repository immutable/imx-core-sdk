import { Signer } from '@ethersproject/abstract-signer';
import { serializeSignature, sign } from '../../utils';
import { CreateWithdrawalResponse, MintsApi, WithdrawalsApi } from '../../api';
import { ERC721Withdrawal, StarkWallet, TokenPrepareWithdrawal, TokenType } from '../../types';
import * as encUtils from 'enc-utils';
import { keccak256 as solidityKeccak256 } from '@ethersproject/solidity';
import { Errors } from '../errors';

const assertIsDefined = <T>(value?: T): T => {
  if (value !== undefined) return value;
  throw new Error('undefined field exception');
};

export async function prepareWithdrawalWorkflow(signer: Signer, starkWallet: StarkWallet, token: TokenPrepareWithdrawal, quantity: string, withdrawalsApi: WithdrawalsApi, mintsApi: MintsApi): Promise<CreateWithdrawalResponse> {

  let signableToken: TokenPrepareWithdrawal;

  if (token.type === TokenType.ERC721) {
    const tokenAddress = token.data.tokenAddress;
    const tokenId = token.data.tokenId;
    signableToken = await mintsApi.getMintableTokenDetailsByClientTokenId({
      tokenAddress,
      tokenId,
    }).then(mintableToken => ({
      type: TokenType.ERC721,
      data: {
        tokenId: getMintingBlobHash(tokenId, mintableToken.data.blueprint),
        tokenAddress: tokenAddress,
      },
    }) as ERC721Withdrawal ).catch(error => {
      if (error.response.status === 404) { //token is already minted on L1
        return token;
      }
      throw error; //unable to recover from any other kind of error
    })
  } else {
    signableToken = token
  }


  const signableWithdrawalResult = await withdrawalsApi.getSignableWithdrawal({
    getSignableWithdrawalRequest: {
      user: await signer.getAddress(),
      token: moldTokenIntoSignableRequestFormat(signableToken),
      amount: quantity.toString(),
    },
  })

  const { signable_message: signableMessage, payload_hash: payloadHash } = signableWithdrawalResult.data
  if (signableMessage === undefined || payloadHash === undefined) {
    throw new Error(Errors.SignableWithdrawalInvalidResponse);
  }

  // Sign hash with L2 credentials
  const starkSignature = serializeSignature(sign(starkWallet.starkKeyPair, payloadHash));

  const prepareWithdrawalResponse = await withdrawalsApi.createWithdrawal({
    createWithdrawalRequest: {
      stark_key: assertIsDefined(signableWithdrawalResult.data.stark_key),
      amount: quantity.toString(),
      asset_id: assertIsDefined(signableWithdrawalResult.data.asset_id),
      vault_id: assertIsDefined(signableWithdrawalResult.data.vault_id),
      nonce: assertIsDefined(signableWithdrawalResult.data.nonce),
      stark_signature: starkSignature,
    },
  })

  return prepareWithdrawalResponse.data;
}

function getMintingBlobHash(id: string, blueprint = ''): string {
  return encUtils.sanitizeHex(
    solidityKeccak256(
      ['bytes'],
      [encUtils.utf8ToArray(`{${id}}:{${blueprint}}`)],
    ),
  );
}

function moldTokenIntoSignableRequestFormat(token: TokenPrepareWithdrawal): SignableWithdrawalToken {
  if (token.type === TokenType.ERC721) {
    return {
      type: TokenType.ERC721,
      data: {
        token_id: token.data.tokenId,
        token_address: token.data.tokenAddress,
      },
    }
  }
  if (token.type === TokenType.ERC20) {
    return {
      type: TokenType.ERC20,
      data: {
        decimals: token.data.decimals,
        token_address: token.data.tokenAddress,
      },
    }
  }
  return token;
}


interface SignableWithdrawalERC20 {
  type: TokenType.ERC20;
  data: {
    token_address: string;
    decimals: number,
  };
}

interface SignableWithdrawalERC721 {
  type: TokenType.ERC721;
  data: {
    token_id: string,
    token_address: string;
  };
}

type SignableWithdrawalEth = {
  type: TokenType.ETH,
  data: {
    decimals: number,
  }
}

type SignableWithdrawalToken = SignableWithdrawalEth | SignableWithdrawalERC721 | SignableWithdrawalERC20
import { Signer } from '@ethersproject/abstract-signer';
import { BigNumber } from '@ethersproject/bignumber';
import { keccak256 } from '@ethersproject/keccak256';
import { TransactionResponse } from '@ethersproject/providers';
import { toUtf8Bytes } from '@ethersproject/strings';
import { parseEther, parseUnits } from '@ethersproject/units';
import * as encUtils from 'enc-utils';
import { GetSignableBurnRequest } from './types';

import {
  CreateTradeResponse,
  CreateTransferResponse,
  CreateTransferResponseV1,
  CreateWithdrawalResponse,
  DepositsApi,
  EncodeAssetRequestTokenTypeEnum,
  EncodeAssetResponse,
  EncodeAssetTokenData,
  EncodingApi,
  GetSignableCancelOrderRequest,
  GetSignableOrderRequest,
  GetSignableRegistrationResponse,
  GetSignableTradeRequest,
  GetSignableTransferRequest,
  GetSignableTransferRequestV1,
  MintRequest,
  MintsApi,
  MintsApiMintTokensRequest,
  MintTokensResponse,
  OrdersApi,
  OrdersApiCreateOrderRequest,
  TokensApi,
  TradesApi,
  TransfersApi,
  TransfersApiGetTransferRequest,
  UsersApi,
  WithdrawalsApi,
} from '../api';
import {
  Core,
  Core__factory,
  IERC20__factory,
  IERC721__factory,
  Registration,
  Registration__factory,
} from '../contracts';
import {
  convertToSignableRequestFormat,
  ERC20Deposit,
  ERC20Withdrawal,
  ERC721Deposit,
  ERC721Withdrawal,
  ETHDeposit,
  ImmutableXConfiguration,
  PrepareWithdrawalRequest,
  TokenDeposit,
  TokenType,
  TokenWithdrawal,
  UnsignedBatchNftTransferRequest,
  UnsignedBurnRequest,
  UnsignedMintRequest,
  UnsignedTransferRequest,
  WalletConnection,
} from '../types';
import { signMessage, signRaw } from '../utils';

// <-- Registration -->
type registerOffchainWorkflowParams = WalletConnection & {
  usersApi: UsersApi;
};

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

async function registerOffchainWorkflow({
  l1Signer,
  l2Signer,
  usersApi,
}: registerOffchainWorkflowParams): Promise<void> {
  const userAddress = await l1Signer.getAddress();
  const starkPublicKey = await l2Signer.getAddress();

  if (await isUserRegistered(userAddress, usersApi)) {
    return;
  }

  const signableResult = await usersApi.getSignableRegistrationOffchain({
    getSignableRegistrationRequest: {
      ether_key: userAddress,
      stark_key: starkPublicKey,
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableResult.data;

  const ethSignature = await signRaw(signableMessage, l1Signer);

  const starkSignature = await l2Signer.signMessage(payloadHash);

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

async function isRegisteredOnChainWorkflow(
  starkPublicKey: string,
  contract: Registration,
): Promise<boolean> {
  return await contract.isRegistered(starkPublicKey);
}

async function getSignableRegistrationOnchain(
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
// <-- End Registration -->
// <-- Deposit -->
interface ETHTokenData {
  decimals: number;
}

async function executeRegisterAndDepositEth(
  signer: Signer,
  amount: BigNumber,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const populatedTransaction =
    await contract.populateTransaction.registerAndDepositEth(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature,
      assetType,
      vaultId,
    );

  return signer.sendTransaction({ ...populatedTransaction, value: amount });
}

async function executeDepositEth(
  signer: Signer,
  amount: BigNumber,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
): Promise<TransactionResponse> {
  const populatedTransaction = await contract.populateTransaction[
    'deposit(uint256,uint256,uint256)'
  ](starkPublicKey, assetType, vaultId);

  return signer.sendTransaction({ ...populatedTransaction, value: amount });
}

async function depositEthWorkflow(
  signer: Signer,
  deposit: ETHDeposit,
  depositsApi: DepositsApi,
  usersApi: UsersApi,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  const user = await signer.getAddress();
  const data: ETHTokenData = {
    decimals: 18,
  };
  const amount = parseEther(deposit.amount);

  const getSignableDepositRequest = {
    user,
    token: {
      type: deposit.type,
      data,
    },
    amount: amount.toString(),
  };

  const signableDepositResult = await depositsApi.getSignableDeposit({
    getSignableDepositRequest,
  });

  const encodingResult = await encodingApi.encodeAsset({
    assetType: 'asset',
    encodeAssetRequest: {
      token: {
        type: deposit.type,
      },
    },
  });

  const assetType = encodingResult.data.asset_type;
  const starkPublicKey = signableDepositResult.data.stark_key;
  const vaultId = signableDepositResult.data.vault_id;

  const coreContract = Core__factory.connect(
    config.l1Configuration.coreContractAddress,
    signer,
  );

  const registrationContract = Registration__factory.connect(
    config.l1Configuration.registrationContractAddress,
    signer,
  );

  const isRegistered = await isRegisteredOnChainWorkflow(
    starkPublicKey,
    registrationContract,
  );

  if (!isRegistered) {
    return executeRegisterAndDepositEth(
      signer,
      amount,
      assetType,
      starkPublicKey,
      vaultId,
      coreContract,
      usersApi,
    );
  } else {
    return executeDepositEth(
      signer,
      amount,
      assetType,
      starkPublicKey,
      vaultId,
      coreContract,
    );
  }
}

interface ERC20TokenData {
  decimals: number;
  token_address: string;
}

async function executeDepositERC20(
  signer: Signer,
  quantizedAmount: BigNumber,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
): Promise<TransactionResponse> {
  const populatedTransaction = await contract.populateTransaction.depositERC20(
    starkPublicKey,
    assetType,
    vaultId,
    quantizedAmount,
  );

  return signer.sendTransaction(populatedTransaction);
}

async function executeRegisterAndDepositERC20(
  signer: Signer,
  quantizedAmount: BigNumber,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const populatedTransaction =
    await contract.populateTransaction.registerAndDepositERC20(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature,
      assetType,
      vaultId,
      quantizedAmount,
    );

  return signer.sendTransaction(populatedTransaction);
}

async function depositERC20Workflow(
  signer: Signer,
  deposit: ERC20Deposit,
  depositsApi: DepositsApi,
  usersApi: UsersApi,
  tokensApi: TokensApi,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  const user = await signer.getAddress();

  // Get decimals for this specific ERC20
  const token = await tokensApi.getToken({ address: deposit.tokenAddress });
  const decimals = parseInt(token.data.decimals);

  const data: ERC20TokenData = {
    decimals,
    token_address: deposit.tokenAddress,
  };

  const amount = parseUnits(deposit.amount, BigNumber.from(decimals));

  // Approve whether an amount of token from an account can be spent by a third-party account
  const tokenContract = IERC20__factory.connect(deposit.tokenAddress, signer);
  const approveTransaction = await tokenContract.populateTransaction.approve(
    config.l1Configuration.coreContractAddress,
    amount,
  );
  await signer.sendTransaction(approveTransaction);

  const getSignableDepositRequest = {
    user,
    token: {
      type: deposit.type,
      data,
    },
    amount: amount.toString(),
  };

  const signableDepositResult = await depositsApi.getSignableDeposit({
    getSignableDepositRequest,
  });

  // Perform encoding on asset details to get an assetType (required for stark contract request)
  const encodingResult = await encodingApi.encodeAsset({
    assetType: 'asset',
    encodeAssetRequest: {
      token: {
        type: deposit.type,
        data: {
          token_address: deposit.tokenAddress,
        },
      },
    },
  });

  const assetType = encodingResult.data.asset_type;
  const starkPublicKey = signableDepositResult.data.stark_key;
  const vaultId = signableDepositResult.data.vault_id;
  const quantizedAmount = BigNumber.from(signableDepositResult.data.amount);

  const coreContract = Core__factory.connect(
    config.l1Configuration.coreContractAddress,
    signer,
  );

  const registrationContract = Registration__factory.connect(
    config.l1Configuration.registrationContractAddress,
    signer,
  );

  const isRegistered = await isRegisteredOnChainWorkflow(
    starkPublicKey,
    registrationContract,
  );

  if (!isRegistered) {
    return executeRegisterAndDepositERC20(
      signer,
      quantizedAmount,
      assetType,
      starkPublicKey,
      vaultId,
      coreContract,
      usersApi,
    );
  } else {
    return executeDepositERC20(
      signer,
      quantizedAmount,
      assetType,
      starkPublicKey,
      vaultId,
      coreContract,
    );
  }
}

interface ERC721TokenData {
  token_id: string;
  token_address: string;
}

async function executeRegisterAndDepositERC721(
  signer: Signer,
  tokenId: string,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Registration,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  // Use proxy registration contract for wrapping register and deposit NFTs
  const populatedTransaction =
    await contract.populateTransaction.registerAndDepositNft(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature,
      assetType,
      vaultId,
      tokenId,
    );

  return signer.sendTransaction(populatedTransaction);
}

async function executeDepositERC721(
  signer: Signer,
  tokenId: string,
  assetType: string,
  starkPublicKey: string,
  vaultId: number,
  contract: Core,
): Promise<TransactionResponse> {
  const populatedTransaction = await contract.populateTransaction.depositNft(
    starkPublicKey,
    assetType,
    vaultId,
    tokenId,
  );

  return signer.sendTransaction(populatedTransaction);
}

async function depositERC721Workflow(
  signer: Signer,
  deposit: ERC721Deposit,
  depositsApi: DepositsApi,
  usersApi: UsersApi,
  encodingApi: EncodingApi,
  config: ImmutableXConfiguration,
): Promise<TransactionResponse> {
  const user = await signer.getAddress();

  const data: ERC721TokenData = {
    token_address: deposit.tokenAddress,
    token_id: deposit.tokenId,
  };

  const amount = '1';

  // Approve whether an amount of token from an account can be spent by a third-party account
  const tokenContract = IERC721__factory.connect(deposit.tokenAddress, signer);
  const approveTransaction = await tokenContract.populateTransaction.approve(
    config.l1Configuration.coreContractAddress,
    deposit.tokenId,
  );
  await signer.sendTransaction(approveTransaction);

  const getSignableDepositRequest = {
    user,
    token: {
      type: deposit.type,
      data,
    },
    amount: amount.toString(),
  };

  const signableDepositResult = await depositsApi.getSignableDeposit({
    getSignableDepositRequest,
  });

  // Perform encoding on asset details to get an assetType (required for stark contract request)
  const encodingResult = await encodingApi.encodeAsset({
    assetType: 'asset',
    encodeAssetRequest: {
      token: {
        type: deposit.type,
        data: {
          token_address: deposit.tokenAddress,
          token_id: deposit.tokenId,
        },
      },
    },
  });

  const assetType = encodingResult.data.asset_type;
  const starkPublicKey = signableDepositResult.data.stark_key;
  const vaultId = signableDepositResult.data.vault_id;

  const coreContract = Core__factory.connect(
    config.l1Configuration.coreContractAddress,
    signer,
  );

  const registrationContract = Registration__factory.connect(
    config.l1Configuration.registrationContractAddress,
    signer,
  );

  const isRegistered = await isRegisteredOnChainWorkflow(
    starkPublicKey,
    registrationContract,
  );

  if (!isRegistered) {
    return executeRegisterAndDepositERC721(
      signer,
      deposit.tokenId,
      assetType,
      starkPublicKey,
      vaultId,
      registrationContract,
      usersApi,
    );
  } else {
    return executeDepositERC721(
      signer,
      deposit.tokenId,
      assetType,
      starkPublicKey,
      vaultId,
      coreContract,
    );
  }
}
// <-- End Deposit -->
// <-- Withdrawal -->
async function getEncodeAssetInfo(
  assetType: string,
  tokenType: EncodeAssetRequestTokenTypeEnum,
  encodingApi: EncodingApi,
  tokenData?: EncodeAssetTokenData,
): Promise<EncodeAssetResponse> {
  const result = await encodingApi.encodeAsset({
    assetType,
    encodeAssetRequest: {
      token: {
        type: tokenType,
        ...(tokenData && { data: tokenData }),
      },
    },
  });
  return result.data;
}

const assertIsDefined = <T>(value?: T): T => {
  if (value !== undefined) return value;
  throw new Error('undefined field exception');
};

type PrepareWithdrawalWorkflowParams = PrepareWithdrawalRequest &
  WalletConnection & {
    withdrawalsApi: WithdrawalsApi;
  };

async function prepareWithdrawalWorkflow({
  l1Signer,
  l2Signer,
  token,
  quantity,
  withdrawalsApi,
}: PrepareWithdrawalWorkflowParams): Promise<CreateWithdrawalResponse> {
  const signableWithdrawalResult = await withdrawalsApi.getSignableWithdrawal({
    getSignableWithdrawalRequest: {
      user: await l1Signer.getAddress(),
      token: convertToSignableRequestFormat(token),
      amount: quantity.toString(),
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableWithdrawalResult.data;

  const starkSignature = await l2Signer.signMessage(payloadHash);

  const { ethAddress, ethSignature } = await signMessage(
    signableMessage,
    l1Signer,
  );

  const prepareWithdrawalResponse = await withdrawalsApi.createWithdrawal({
    createWithdrawalRequest: {
      stark_key: assertIsDefined(signableWithdrawalResult.data.stark_key),
      amount: quantity.toString(),
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

async function executeRegisterAndWithdrawEth(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  contract: Registration,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const populatedTransaction =
    await contract.populateTransaction.registerAndWithdraw(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature,
      assetType,
    );

  return signer.sendTransaction(populatedTransaction);
}

async function executeWithdrawEth(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  contract: Core,
): Promise<TransactionResponse> {
  const populatedTransaction = await contract.populateTransaction.withdraw(
    starkPublicKey,
    assetType,
  );

  return signer.sendTransaction(populatedTransaction);
}

async function completeEthWithdrawalWorkflow(
  signer: Signer,
  starkPublicKey: string,
  encodingApi: EncodingApi,
  usersApi: UsersApi,
  config: ImmutableXConfiguration,
) {
  const assetType = await getEncodeAssetInfo('asset', 'ETH', encodingApi);

  const coreContract = Core__factory.connect(
    config.l1Configuration.coreContractAddress,
    signer,
  );

  const registrationContract = Registration__factory.connect(
    config.l1Configuration.registrationContractAddress,
    signer,
  );

  const isRegistered = await isRegisteredOnChainWorkflow(
    starkPublicKey,
    registrationContract,
  );

  if (!isRegistered) {
    return executeRegisterAndWithdrawEth(
      signer,
      assetType.asset_type,
      starkPublicKey,
      registrationContract,
      usersApi,
    );
  } else {
    return executeWithdrawEth(
      signer,
      assetType.asset_type,
      starkPublicKey,
      coreContract,
    );
  }
}

async function executeRegisterAndWithdrawERC20(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  contract: Registration,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const populatedTransaction =
    await contract.populateTransaction.registerAndWithdraw(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature,
      assetType,
    );

  return signer.sendTransaction(populatedTransaction);
}

async function executeWithdrawERC20(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  contract: Core,
): Promise<TransactionResponse> {
  const populatedTransaction = await contract.populateTransaction.withdraw(
    starkPublicKey,
    assetType,
  );

  return signer.sendTransaction(populatedTransaction);
}

async function completeERC20WithdrawalWorfklow(
  signer: Signer,
  starkPublicKey: string,
  token: ERC20Withdrawal,
  encodingApi: EncodingApi,
  usersApi: UsersApi,
  config: ImmutableXConfiguration,
) {
  const assetType = await getEncodeAssetInfo(
    'asset',
    TokenType.ERC20,
    encodingApi,
    {
      token_id: token.data.tokenId,
      token_address: token.data.tokenAddress,
    },
  );

  const coreContract = Core__factory.connect(
    config.l1Configuration.coreContractAddress,
    signer,
  );

  const registrationContract = Registration__factory.connect(
    config.l1Configuration.registrationContractAddress,
    signer,
  );

  const isRegistered = await isRegisteredOnChainWorkflow(
    starkPublicKey,
    registrationContract,
  );

  if (!isRegistered) {
    return executeRegisterAndWithdrawERC20(
      signer,
      assetType.asset_type,
      starkPublicKey,
      registrationContract,
      usersApi,
    );
  } else {
    return executeWithdrawERC20(
      signer,
      assetType.asset_type,
      starkPublicKey,
      coreContract,
    );
  }
}

interface MintableERC721Withdrawal {
  type: TokenType.ERC721;
  data: {
    id: string;
    blueprint?: string;
    tokenAddress: string;
  };
}

async function executeWithdrawMintableERC721(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  mintingBlob: string,
  contract: Core,
): Promise<TransactionResponse> {
  const populatedTransaction =
    await contract.populateTransaction.withdrawAndMint(
      starkPublicKey,
      assetType,
      mintingBlob,
    );
  return signer.sendTransaction(populatedTransaction);
}

async function executeRegisterAndWithdrawMintableERC721(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  mintingBlob: string,
  contract: Registration,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const populatedTransaction =
    await contract.populateTransaction.regsiterAndWithdrawAndMint(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature,
      assetType,
      mintingBlob,
    );

  return signer.sendTransaction(populatedTransaction);
}

function getMintingBlob(token: MintableERC721Withdrawal): string {
  const id = token.data.id;
  const blueprint = token.data.blueprint || '';
  return encUtils.sanitizeHex(encUtils.utf8ToHex(`{${id}}:{${blueprint}}`));
}

async function completeMintableERC721Withdrawal(
  signer: Signer,
  starkPublicKey: string,
  token: MintableERC721Withdrawal,
  encodingApi: EncodingApi,
  usersApi: UsersApi,
  config: ImmutableXConfiguration,
) {
  const assetType = await getEncodeAssetInfo(
    'mintable-asset',
    TokenType.ERC721,
    encodingApi,
    {
      id: token.data.id,
      token_address: token.data.tokenAddress,
      ...(token.data.blueprint && { blueprint: token.data.blueprint }),
    },
  );
  const mintingBlob = getMintingBlob(token);

  const coreContract = Core__factory.connect(
    config.l1Configuration.coreContractAddress,
    signer,
  );

  const registrationContract = Registration__factory.connect(
    config.l1Configuration.registrationContractAddress,
    signer,
  );

  const isRegistered = await isRegisteredOnChainWorkflow(
    starkPublicKey,
    registrationContract,
  );

  if (!isRegistered) {
    return executeRegisterAndWithdrawMintableERC721(
      signer,
      assetType.asset_type,
      starkPublicKey,
      mintingBlob,
      registrationContract,
      usersApi,
    );
  } else {
    return executeWithdrawMintableERC721(
      signer,
      assetType.asset_type,
      starkPublicKey,
      mintingBlob,
      coreContract,
    );
  }
}

async function executeRegisterAndWithdrawERC721(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  tokenId: string,
  contract: Registration,
  usersApi: UsersApi,
): Promise<TransactionResponse> {
  const etherKey = await signer.getAddress();

  const signableResult = await getSignableRegistrationOnchain(
    etherKey,
    starkPublicKey,
    usersApi,
  );

  const populatedTransaction =
    await contract.populateTransaction.registerAndWithdrawNft(
      etherKey,
      starkPublicKey,
      signableResult.operator_signature,
      assetType,
      tokenId,
    );

  return signer.sendTransaction(populatedTransaction);
}

async function executeWithdrawERC721(
  signer: Signer,
  assetType: string,
  starkPublicKey: string,
  tokenId: string,
  contract: Core,
): Promise<TransactionResponse> {
  const populatedTransaction = await contract.populateTransaction.withdrawNft(
    starkPublicKey,
    assetType,
    tokenId,
  );
  return signer.sendTransaction(populatedTransaction);
}

async function completeERC721Withdrawal(
  signer: Signer,
  starkPublicKey: string,
  token: ERC721Withdrawal,
  encodingApi: EncodingApi,
  usersApi: UsersApi,
  config: ImmutableXConfiguration,
) {
  const assetType = await getEncodeAssetInfo(
    'asset',
    TokenType.ERC721,
    encodingApi,
    {
      token_id: token.data.tokenId,
      token_address: token.data.tokenAddress,
    },
  );

  const coreContract = Core__factory.connect(
    config.l1Configuration.coreContractAddress,
    signer,
  );

  const registrationContract = Registration__factory.connect(
    config.l1Configuration.registrationContractAddress,
    signer,
  );

  const isRegistered = await isRegisteredOnChainWorkflow(
    starkPublicKey,
    registrationContract,
  );

  if (!isRegistered) {
    return executeRegisterAndWithdrawERC721(
      signer,
      assetType.asset_type,
      starkPublicKey,
      token.data.tokenId,
      registrationContract,
      usersApi,
    );
  } else {
    return executeWithdrawERC721(
      signer,
      assetType.asset_type,
      starkPublicKey,
      token.data.tokenId,
      coreContract,
    );
  }
}

async function completeERC721WithdrawalWorkflow(
  signer: Signer,
  starkPublicKey: string,
  token: ERC721Withdrawal,
  encodingApi: EncodingApi,
  mintsApi: MintsApi,
  usersApi: UsersApi,
  config: ImmutableXConfiguration,
) {
  const tokenAddress = token.data.tokenAddress;
  const tokenId = token.data.tokenId;
  return await mintsApi
    .getMintableTokenDetailsByClientTokenId({
      tokenAddress,
      tokenId,
    })
    .then(mintableToken =>
      completeMintableERC721Withdrawal(
        signer,
        starkPublicKey,
        {
          type: TokenType.ERC721,
          data: {
            id: tokenId,
            tokenAddress: tokenAddress,
            blueprint: mintableToken.data.blueprint,
          },
        },
        encodingApi,
        usersApi,
        config,
      ),
    )
    .catch(error => {
      if (error.response.status === 404) {
        console.log(error.response); // token is already minted on L1
        return completeERC721Withdrawal(
          signer,
          starkPublicKey,
          token,
          encodingApi,
          usersApi,
          config,
        );
      }
      throw error; // unable to recover from any other kind of error
    });
}
// <-- End Withdrawal -->
// <-- Transfers -->
type TransfersWorkflowParams = WalletConnection & {
  request: GetSignableTransferRequestV1;
  transfersApi: TransfersApi;
};
type BatchTransfersWorkflowParams = WalletConnection & {
  request: GetSignableTransferRequest;
  transfersApi: TransfersApi;
};

async function transfersWorkflow({
  l1Signer,
  l2Signer,
  request,
  transfersApi,
}: TransfersWorkflowParams): Promise<CreateTransferResponseV1> {
  const signableResult = await transfersApi.getSignableTransferV1({
    getSignableTransferRequest: {
      sender: request.sender,
      token: request.token,
      amount: request.amount,
      receiver: request.receiver,
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableResult.data;

  const ethSignature = await signRaw(signableMessage, l1Signer);

  const starkSignature = await l2Signer.signMessage(payloadHash);

  const ethAddress = await l1Signer.getAddress();

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

async function batchTransfersWorkflow({
  l1Signer,
  l2Signer,
  request,
  transfersApi,
}: BatchTransfersWorkflowParams): Promise<CreateTransferResponse> {
  const signableResult = await transfersApi.getSignableTransfer({
    getSignableTransferRequestV2: {
      sender_ether_key: request.sender_ether_key,
      signable_requests: request.signable_requests,
    },
  });

  const signableMessage = signableResult.data.signable_message;

  if (signableMessage === undefined) {
    throw new Error('Invalid response from Signable registration offchain');
  }

  const ethAddress = await l1Signer.getAddress();

  const ethSignature = await signRaw(signableMessage, l1Signer);

  const requests = [];
  for (const resp of signableResult.data.signable_responses) {
    const starkSignature = await l2Signer.signMessage(resp.payload_hash);
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
// <-- End Transfers -->
// <-- Burn -->
const BurnEthAddress = '0x0000000000000000000000000000000000000000';

type burnWorkflowParams = WalletConnection & {
  request: GetSignableBurnRequest;
  transfersApi: TransfersApi;
};

async function burnWorkflow({
  l1Signer,
  l2Signer,
  request,
  transfersApi,
}: burnWorkflowParams): Promise<CreateTransferResponseV1> {
  const transferRequest: UnsignedTransferRequest = {
    sender: request.sender,
    receiver: BurnEthAddress,
    token: request.token,
    amount: request.amount,
  };

  return transfersWorkflow({
    l1Signer,
    l2Signer,
    request: transferRequest,
    transfersApi,
  });
}

async function getBurnWorkflow(
  request: TransfersApiGetTransferRequest,
  transfersApi: TransfersApi,
) {
  return await transfersApi.getTransfer({ id: request.id });
}
// <-- End Burn -->
// <-- Minting -->
async function mintingWorkflow(
  signer: Signer,
  request: UnsignedMintRequest,
  mintsApi: MintsApi,
): Promise<MintTokensResponse> {
  //TODO: improve this object key rearrangement.
  //object keys should respect this order, but the logic can be improved
  const users = request.users.map(user => ({
    ether_key: user.user,
    tokens: user.tokens.map(token => ({
      id: token.id,
      ...(token.blueprint && { blueprint: token.blueprint }),
      ...(token.royalties &&
        token.royalties.length > 0 && {
          royalties: token.royalties.map(royalty => ({
            recipient: royalty.recipient,
            percentage: royalty.percentage,
          })),
        }),
    })),
  }));

  const royalties = request.royalties;
  const signablePayload = {
    contract_address: request.contract_address,
    ...(royalties &&
      royalties.length > 0 && {
        royalties: royalties.map(fee => ({
          recipient: fee.recipient,
          percentage: fee.percentage,
        })),
      }),
    users,
    auth_signature: '',
  };

  const hash = keccak256(toUtf8Bytes(JSON.stringify(signablePayload)));
  const authSignature = await signRaw(hash, signer);

  const apiPayload: MintRequest = {
    users: signablePayload.users.map(user => ({
      user: user.ether_key,
      tokens: user.tokens,
    })),
    ...(royalties && royalties.length > 0 && { royalties }),
    contract_address: request.contract_address,
    auth_signature: authSignature,
  };

  const apiRequest: MintsApiMintTokensRequest = {
    mintTokensRequestV2: [apiPayload],
  };

  const response = await mintsApi.mintTokens(apiRequest);

  return response.data;
}
// <-- End Minting -->
// <-- Orders -->
type CreateOrderWorkflowParams = WalletConnection & {
  request: GetSignableOrderRequest;
  ordersApi: OrdersApi;
};

type CancelOrderWorkflowParams = WalletConnection & {
  request: GetSignableCancelOrderRequest;
  ordersApi: OrdersApi;
};

async function createOrderWorkflow({
  l1Signer,
  l2Signer,
  request,
  ordersApi,
}: CreateOrderWorkflowParams) {
  const getSignableOrderResponse = await ordersApi.getSignableOrder({
    getSignableOrderRequestV3: request,
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    getSignableOrderResponse.data;

  const ethSignature = await signRaw(signableMessage, l1Signer);

  const starkSignature = await l2Signer.signMessage(payloadHash);

  const ethAddress = await l1Signer.getAddress();

  const resp = getSignableOrderResponse.data;

  const orderParams: OrdersApiCreateOrderRequest = {
    createOrderRequest: {
      amount_buy: resp.amount_buy,
      amount_sell: resp.amount_sell,
      asset_id_buy: resp.asset_id_buy,
      asset_id_sell: resp.asset_id_sell,
      expiration_timestamp: resp.expiration_timestamp,
      include_fees: true,
      fees: request.fees,
      nonce: resp.nonce,
      stark_key: resp.stark_key,
      stark_signature: starkSignature,
      vault_id_buy: resp.vault_id_buy,
      vault_id_sell: resp.vault_id_sell,
    },
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  };

  const createOrderResponse = await ordersApi.createOrder(orderParams);

  return {
    ...createOrderResponse.data,
  };
}

async function cancelOrderWorkflow({
  l1Signer,
  l2Signer,
  request,
  ordersApi,
}: CancelOrderWorkflowParams) {
  const getSignableCancelOrderResponse = await ordersApi.getSignableCancelOrder(
    {
      getSignableCancelOrderRequest: {
        order_id: request.order_id,
      },
    },
  );

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    getSignableCancelOrderResponse.data;

  const ethSignature = await signRaw(signableMessage, l1Signer);

  const starkSignature = await l2Signer.signMessage(payloadHash);

  const ethAddress = await l1Signer.getAddress();

  const cancelOrderResponse = await ordersApi.cancelOrder({
    id: request.order_id.toString(),
    cancelOrderRequest: {
      order_id: request.order_id,
      stark_signature: starkSignature,
    },
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  });

  return {
    order_id: cancelOrderResponse.data.order_id,
    status: cancelOrderResponse.data.status,
  };
}
// <-- End Orders -->
// <-- Trades -->
type createTradeWorkflowParams = WalletConnection & {
  request: GetSignableTradeRequest;
  tradesApi: TradesApi;
};

async function createTradeWorkflow({
  l1Signer,
  l2Signer,
  request,
  tradesApi,
}: createTradeWorkflowParams): Promise<CreateTradeResponse> {
  const ethAddress = await l1Signer.getAddress();

  const signableResult = await tradesApi.getSignableTrade({
    getSignableTradeRequest: {
      user: ethAddress,
      order_id: request.order_id,
      fees: request.fees,
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableResult.data;

  const ethSignature = await signRaw(signableMessage, l1Signer);

  const starkSignature = await l2Signer.signMessage(payloadHash);

  const createTradeResponse = await tradesApi.createTrade({
    createTradeRequest: {
      amount_buy: signableResult.data.amount_buy,
      amount_sell: signableResult.data.amount_sell,
      asset_id_buy: signableResult.data.asset_id_buy,
      asset_id_sell: signableResult.data.asset_id_sell,
      expiration_timestamp: signableResult.data.expiration_timestamp,
      fee_info: signableResult.data.fee_info,
      fees: request.fees,
      include_fees: true,
      nonce: signableResult.data.nonce,
      order_id: request.order_id,
      stark_key: signableResult.data.stark_key,
      vault_id_buy: signableResult.data.vault_id_buy,
      vault_id_sell: signableResult.data.vault_id_sell,
      stark_signature: starkSignature,
    },
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  });

  return createTradeResponse.data;
}
// <-- End Trades -->

export class ImmutableX {
  private readonly depositsApi: DepositsApi;
  private readonly encodingApi: EncodingApi;
  private readonly mintsApi: MintsApi;
  private readonly ordersApi: OrdersApi;
  private readonly tokensApi: TokensApi;
  private readonly tradesApi: TradesApi;
  private readonly transfersApi: TransfersApi;
  private readonly usersApi: UsersApi;
  private readonly withdrawalsApi: WithdrawalsApi;

  constructor(protected config: ImmutableXConfiguration) {
    this.config = config;
    this.depositsApi = new DepositsApi(config.apiConfiguration);
    this.encodingApi = new EncodingApi(config.apiConfiguration);
    this.mintsApi = new MintsApi(config.apiConfiguration);
    this.ordersApi = new OrdersApi(config.apiConfiguration);
    this.tokensApi = new TokensApi(config.apiConfiguration);
    this.tradesApi = new TradesApi(config.apiConfiguration);
    this.transfersApi = new TransfersApi(config.apiConfiguration);
    this.usersApi = new UsersApi(config.apiConfiguration);
    this.withdrawalsApi = new WithdrawalsApi(config.apiConfiguration);
  }

  public registerOffchain(walletConnection: WalletConnection) {
    return registerOffchainWorkflow({
      ...walletConnection,
      usersApi: this.usersApi,
    });
  }

  public async isRegisteredOnchain(walletConnection: WalletConnection) {
    const registrationContract = Registration__factory.connect(
      this.config.l1Configuration.registrationContractAddress,
      walletConnection.l1Signer,
    );

    const l2Address = await walletConnection.l2Signer.getAddress();

    return isRegisteredOnChainWorkflow(l2Address, registrationContract);
  }

  public mint(signer: Signer, request: UnsignedMintRequest) {
    return mintingWorkflow(signer, request, this.mintsApi);
  }

  public transfer(
    walletConnection: WalletConnection,
    request: UnsignedTransferRequest,
  ) {
    return transfersWorkflow({
      ...walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
  }

  public batchNftTransfer(
    walletConnection: WalletConnection,
    request: UnsignedBatchNftTransferRequest,
  ) {
    return batchTransfersWorkflow({
      ...walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
  }

  public burn(
    walletConnection: WalletConnection,
    request: UnsignedBurnRequest,
  ) {
    return burnWorkflow({
      ...walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
  }

  public getBurn(request: TransfersApiGetTransferRequest) {
    return getBurnWorkflow(request, this.transfersApi);
  }

  public deposit(signer: Signer, deposit: TokenDeposit) {
    switch (deposit.type) {
      case TokenType.ETH:
        return depositEthWorkflow(
          signer,
          deposit,
          this.depositsApi,
          this.usersApi,
          this.encodingApi,
          this.config,
        );
      case TokenType.ERC20:
        return depositERC20Workflow(
          signer,
          deposit,
          this.depositsApi,
          this.usersApi,
          this.tokensApi,
          this.encodingApi,
          this.config,
        );
      case TokenType.ERC721:
        return depositERC721Workflow(
          signer,
          deposit,
          this.depositsApi,
          this.usersApi,
          this.encodingApi,
          this.config,
        );
    }
  }

  public depositEth(signer: Signer, deposit: ETHDeposit) {
    return depositEthWorkflow(
      signer,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.encodingApi,
      this.config,
    );
  }

  public depositERC20(signer: Signer, deposit: ERC20Deposit) {
    return depositERC20Workflow(
      signer,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.tokensApi,
      this.encodingApi,
      this.config,
    );
  }

  public depositERC721(signer: Signer, deposit: ERC721Deposit) {
    return depositERC721Workflow(
      signer,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.encodingApi,
      this.config,
    );
  }

  public prepareWithdrawal(
    walletConnection: WalletConnection,
    request: PrepareWithdrawalRequest,
  ) {
    return prepareWithdrawalWorkflow({
      ...walletConnection,
      ...request,
      withdrawalsApi: this.withdrawalsApi,
    });
  }

  public completeEthWithdrawal(signer: Signer, starkPublicKey: string) {
    return completeEthWithdrawalWorkflow(
      signer,
      starkPublicKey,
      this.encodingApi,
      this.usersApi,
      this.config,
    );
  }

  public completeERC20Withdrawal(
    signer: Signer,
    starkPublicKey: string,
    token: ERC20Withdrawal,
  ) {
    return completeERC20WithdrawalWorfklow(
      signer,
      starkPublicKey,
      token,
      this.encodingApi,
      this.usersApi,
      this.config,
    );
  }

  public completeERC721Withdrawal(
    signer: Signer,
    starkPublicKey: string,
    token: ERC721Withdrawal,
  ) {
    return completeERC721WithdrawalWorkflow(
      signer,
      starkPublicKey,
      token,
      this.encodingApi,
      this.mintsApi,
      this.usersApi,
      this.config,
    );
  }

  public completeWithdrawal(
    signer: Signer,
    starkPublicKey: string,
    token: TokenWithdrawal,
  ) {
    switch (token.type) {
      case TokenType.ETH:
        return this.completeEthWithdrawal(signer, starkPublicKey);
      case TokenType.ERC721:
        return this.completeERC721Withdrawal(signer, starkPublicKey, token);
      case TokenType.ERC20:
        return this.completeERC20Withdrawal(signer, starkPublicKey, token);
    }
  }

  public createOrder(
    walletConnection: WalletConnection,
    request: GetSignableOrderRequest,
  ) {
    return createOrderWorkflow({
      ...walletConnection,
      request,
      ordersApi: this.ordersApi,
    });
  }

  public cancelOrder(
    walletConnection: WalletConnection,
    request: GetSignableCancelOrderRequest,
  ) {
    return cancelOrderWorkflow({
      ...walletConnection,
      request,
      ordersApi: this.ordersApi,
    });
  }

  public createTrade(
    walletConnection: WalletConnection,
    request: GetSignableTradeRequest,
  ) {
    return createTradeWorkflow({
      ...walletConnection,
      request,
      tradesApi: this.tradesApi,
    });
  }
}

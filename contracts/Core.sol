// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

interface Core {

    function announceAvailabilityVerifierRemovalIntent(address) external;
    function announceVerifierRemovalIntent(address) external;
    function getRegisteredAvailabilityVerifiers() external;
    function getRegisteredVerifiers() external;
    function isAvailabilityVerifier(address) external;
    function isFrozen() external;
    function isVerifier(address) external;
    function mainAcceptGovernance() external;
    function mainCancelNomination() external;
    function mainIsGovernor(address) external;
    function mainNominateNewGovernor(address) external;
    function mainRemoveGovernor(address) external;
    function registerAvailabilityVerifier(address, string calldata) external;
    function registerVerifier(address, string calldata) external;
    function removeAvailabilityVerifier(address) external;
    function removeVerifier(address) external;
    function unFreeze() external;
    function getEthKey(uint256 starkKey) external view returns (address ethKey);
    function isOperator(address) external;
    function isTokenAdmin(address) external;
    function isUserAdmin(address) external;
    function onERC721Received(address, address, uint256, bytes calldata) external;
    function registerOperator(address) external;
    function registerToken(uint256, bytes calldata) external;
    function registerTokenAdmin(address) external;
    function registerUser(address, uint256, bytes calldata) external;
    function registerUserAdmin(address) external;
    function unregisterOperator(address) external;
    function unregisterTokenAdmin(address) external;
    function unregisterUserAdmin(address) external;
    function withdrawNftTo(uint256, uint256, uint256, address) external;
    function withdrawTo(uint256, uint256, address) external;

    event LogDeposit(
        address depositorEthKey,
        uint256 starkKey,
        uint256 vaultId,
        uint256 assetType,
        uint256 nonQuantizedAmount,
        uint256 quantizedAmount
    );

    event LogNftDeposit(
        address depositorEthKey,
        uint256 starkKey,
        uint256 vaultId,
        uint256 assetType,
        uint256 tokenId,
        uint256 assetId
    );

    event LogDepositCancel(uint256 starkKey, uint256 vaultId, uint256 assetId);

    event LogDepositCancelReclaimed(
        uint256 starkKey,
        uint256 vaultId,
        uint256 assetType,
        uint256 nonQuantizedAmount,
        uint256 quantizedAmount
    );

    event LogDepositNftCancelReclaimed(
        uint256 starkKey,
        uint256 vaultId,
        uint256 assetType,
        uint256 tokenId,
        uint256 assetId
    );

    function getDepositBalance(
        uint256 starkKey,
        uint256 assetId,
        uint256 vaultId
    ) external view returns (uint256 balance);

    function getQuantizedDepositBalance(
        uint256 starkKey,
        uint256 assetId,
        uint256 vaultId
    ) external view returns (uint256 balance);

    function depositNft(
        uint256 starkKey,
        uint256 assetType,
        uint256 vaultId,
        uint256 tokenId
    ) external;

    function getCancellationRequest(
        uint256 starkKey,
        uint256 assetId,
        uint256 vaultId
    ) external view returns (uint256 request);

    function depositERC20(
        uint256 starkKey,
        uint256 assetType,
        uint256 vaultId,
        uint256 quantizedAmount
    ) external;

    function depositEth(
        uint256 starkKey,
        uint256 assetType,
        uint256 vaultId
    ) external payable;

    function deposit(
        uint256 starkKey,
        uint256 assetType,
        uint256 vaultId,
        uint256 quantizedAmount
    ) external;

    function deposit(
        uint256 starkKey,
        uint256 assetType,
        uint256 vaultId
    ) external payable;

    function depositCancel(
        uint256 starkKey,
        uint256 assetId,
        uint256 vaultId
    ) external;

    function depositReclaim(
        uint256 starkKey,
        uint256 assetId,
        uint256 vaultId
    ) external;

    function depositNftReclaim(
        uint256 starkKey,
        uint256 assetType,
        uint256 vaultId,
        uint256 tokenId
    ) external;

    event LogWithdrawalPerformed(
        uint256 ownerKey,
        uint256 assetType,
        uint256 nonQuantizedAmount,
        uint256 quantizedAmount,
        address recipient
    );

    event LogNftWithdrawalPerformed(
        uint256 ownerKey,
        uint256 assetType,
        uint256 tokenId,
        uint256 assetId,
        address recipient
    );

    event LogMintWithdrawalPerformed(
        uint256 ownerKey,
        uint256 assetType,
        uint256 nonQuantizedAmount,
        uint256 quantizedAmount,
        uint256 assetId
    );

    event LogWithdrawalAllowed(
        uint256 ownerKey,
        uint256 assetType,
        uint256 nonQuantizedAmount,
        uint256 quantizedAmount
    );

    event LogNftWithdrawalAllowed(uint256 ownerKey, uint256 assetId);

    event LogMintableWithdrawalAllowed(uint256 ownerKey, uint256 assetId, uint256 quantizedAmount);

    function getWithdrawalBalance(uint256 ownerKey, uint256 assetId)
        external
        view
        returns (uint256 balance);

    function withdraw(uint256 ownerKey, uint256 assetType) external;

    function withdrawNft(
        uint256 ownerKey,
        uint256 assetType,
        uint256 tokenId
    ) external ;

    function withdrawAndMint(
        uint256 ownerKey,
        uint256 assetType,
        bytes calldata mintingBlob
    ) external;

    function getVaultRoot() external view returns (uint256 root);
    function getVaultTreeHeight() external view returns (uint256 height);
    function getOrderRoot() external view returns (uint256 root);
    function getOrderTreeHeight() external view returns (uint256 height);
    function getSequenceNumber() external view returns (uint256 seq);
    function getLastBatchId() external view returns (uint256 batchId);

    function registerAndDepositERC20(
        address ethKey,
        uint256 starkKey,
        bytes calldata signature,
        uint256 assetType,
        uint256 vaultId,
        uint256 quantizedAmount
    ) external;

    function registerAndDepositEth(
        address ethKey,
        uint256 starkKey,
        bytes calldata signature,
        uint256 assetType,
        uint256 vaultId
    ) external payable;

    function getAssetInfo(uint256 assetType) external view returns (bytes memory assetInfo);

    function getQuantum(uint256 presumedAssetType) external view returns (uint256 quantum);

    function escape(
        uint256 starkKey,
        uint256 vaultId,
        uint256 assetId,
        uint256 quantizedAmount
    ) external;

    event LogFullWithdrawalRequest(uint256 starkKey, uint256 vaultId);

    function fullWithdrawalRequest(uint256 starkKey, uint256 vaultId) external;

    function freezeRequest(uint256 starkKey, uint256 vaultId) external;

    event LogRootUpdate(
        uint256 sequenceNumber,
        uint256 batchId,
        uint256 vaultRoot,
        uint256 orderRoot
    );

    event LogStateTransitionFact(bytes32 stateTransitionFact);

    event LogVaultBalanceChangeApplied(
        address ethKey,
        uint256 assetId,
        uint256 vaultId,
        int256 quantizedAmountChange
    );

    function updateState(uint256[] calldata publicInput, uint256[] calldata applicationData) external;

    function getFullWithdrawalRequest(uint256 starkKey, uint256 vaultId)
        external
        view
        returns (uint256 res);
}
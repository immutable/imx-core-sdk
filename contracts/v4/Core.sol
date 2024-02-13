// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

interface Core {
    fallback() external payable;

    function VERSION() external view returns (string memory);

    function initialize(bytes memory data) external;

    receive() external payable;

    event LogFrozen();
    event LogNewGovernorAccepted(address acceptedGovernor);
    event LogNominatedGovernor(address nominatedGovernor);
    event LogNominationCancelled();
    event LogRegistered(address entry, string entryId);
    event LogRemovalIntent(address entry, string entryId);
    event LogRemoved(address entry, string entryId);
    event LogRemovedGovernor(address removedGovernor);
    event LogUnFrozen();

    function DEPOSIT_CANCEL_DELAY() external view returns (uint256);

    function FREEZE_GRACE_PERIOD() external view returns (uint256);

    function MAIN_GOVERNANCE_INFO_TAG() external view returns (string memory);

    function MAX_FORCED_ACTIONS_REQS_PER_BLOCK() external view returns (uint256);

    function MAX_VERIFIER_COUNT() external view returns (uint256);

    function UNFREEZE_DELAY() external view returns (uint256);

    function VERIFIER_REMOVAL_DELAY() external view returns (uint256);

    function announceAvailabilityVerifierRemovalIntent(address verifier) external;

    function announceVerifierRemovalIntent(address verifier) external;

    function getRegisteredAvailabilityVerifiers() external view returns (address[] memory _verifers);

    function getRegisteredVerifiers() external view returns (address[] memory _verifers);

    function isAvailabilityVerifier(address verifierAddress) external view returns (bool);

    function isFrozen() external view returns (bool);

    function isVerifier(address verifierAddress) external view returns (bool);

    function mainAcceptGovernance() external;

    function mainCancelNomination() external;

    function mainIsGovernor(address testGovernor) external view returns (bool);

    function mainNominateNewGovernor(address newGovernor) external;

    function mainRemoveGovernor(address governorForRemoval) external;

    function registerAvailabilityVerifier(address verifier, string memory identifier) external;

    function registerVerifier(address verifier, string memory identifier) external;

    function removeAvailabilityVerifier(address verifier) external;

    function removeVerifier(address verifier) external;

    function unFreeze() external;

    event LogDeposit(
        address depositorEthKey,
        uint256 starkKey,
        uint256 vaultId,
        uint256 assetType,
        uint256 nonQuantizedAmount,
        uint256 quantizedAmount
    );
    event LogDepositCancel(uint256 starkKey, uint256 vaultId, uint256 assetId);
    event LogDepositCancelReclaimed(
        uint256 starkKey, uint256 vaultId, uint256 assetType, uint256 nonQuantizedAmount, uint256 quantizedAmount
    );
    event LogDepositNftCancelReclaimed(
        uint256 starkKey, uint256 vaultId, uint256 assetType, uint256 tokenId, uint256 assetId
    );
    event LogMintWithdrawalPerformed(
        uint256 ownerKey, uint256 assetType, uint256 nonQuantizedAmount, uint256 quantizedAmount, uint256 assetId
    );
    event LogMintableWithdrawalAllowed(uint256 ownerKey, uint256 assetId, uint256 quantizedAmount);
    event LogNftDeposit(
        address depositorEthKey, uint256 starkKey, uint256 vaultId, uint256 assetType, uint256 tokenId, uint256 assetId
    );
    event LogNftWithdrawalAllowed(uint256 ownerKey, uint256 assetId);
    event LogNftWithdrawalPerformed(
        uint256 ownerKey, uint256 assetType, uint256 tokenId, uint256 assetId, address recipient
    );
    event LogTokenAdminAdded(address tokenAdmin);
    event LogTokenAdminRemoved(address tokenAdmin);
    event LogTokenRegistered(uint256 assetType, bytes assetInfo, uint256 quantum);
    event LogUserRegistered(address ethKey, uint256 starkKey, address sender);
    event LogWithdrawalAllowed(
        uint256 ownerKey, uint256 assetType, uint256 nonQuantizedAmount, uint256 quantizedAmount
    );
    event LogWithdrawalPerformed(
        uint256 ownerKey, uint256 assetType, uint256 nonQuantizedAmount, uint256 quantizedAmount, address recipient
    );

    function defaultVaultWithdrawalLock() external view returns (uint256);

    function deposit(uint256 starkKey, uint256 assetType, uint256 vaultId) external payable;

    function deposit(uint256 starkKey, uint256 assetType, uint256 vaultId, uint256 quantizedAmount) external;

    function depositCancel(uint256 starkKey, uint256 assetId, uint256 vaultId) external;

    function depositERC20(uint256 starkKey, uint256 assetType, uint256 vaultId, uint256 quantizedAmount) external;

    function depositEth(uint256 starkKey, uint256 assetType, uint256 vaultId) external payable;

    function depositNft(uint256 starkKey, uint256 assetType, uint256 vaultId, uint256 tokenId) external;

    function depositNftReclaim(uint256 starkKey, uint256 assetType, uint256 vaultId, uint256 tokenId) external;

    function depositReclaim(uint256 starkKey, uint256 assetId, uint256 vaultId) external;

    function getActionCount() external view returns (uint256);

    function getActionHashByIndex(uint256 actionIndex) external view returns (bytes32);

    function getAssetInfo(uint256 assetType) external view returns (bytes memory assetInfo);

    function getCancellationRequest(uint256 starkKey, uint256 assetId, uint256 vaultId)
        external
        view
        returns (uint256 request);

    function getDepositBalance(uint256 starkKey, uint256 assetId, uint256 vaultId)
        external
        view
        returns (uint256 balance);

    function getEthKey(uint256 ownerKey) external view returns (address);

    function getFullWithdrawalRequest(uint256 starkKey, uint256 vaultId) external view returns (uint256 res);

    function getQuantizedDepositBalance(uint256 starkKey, uint256 assetId, uint256 vaultId)
        external
        view
        returns (uint256 balance);

    function getQuantum(uint256 presumedAssetType) external view returns (uint256 quantum);

    function getWithdrawalBalance(uint256 ownerKey, uint256 assetId) external view returns (uint256 balance);

    function isAssetRegistered(uint256 assetType) external view returns (bool);

    function isTokenAdmin(address testedAdmin) external view returns (bool);

    function onERC721Received(address, address, uint256, bytes memory) external returns (bytes4);

    function orderRegistryAddress() external view returns (address);

    function registerAndDepositERC20(
        address ethKey,
        uint256 starkKey,
        bytes memory signature,
        uint256 assetType,
        uint256 vaultId,
        uint256 quantizedAmount
    ) external;

    function registerAndDepositEth(
        address ethKey,
        uint256 starkKey,
        bytes memory signature,
        uint256 assetType,
        uint256 vaultId
    ) external payable;

    function registerEthAddress(address ethKey, uint256 starkKey, bytes memory starkSignature) external;

    function registerSender(uint256 starkKey, bytes memory starkSignature) external;

    function registerToken(uint256 assetType, bytes memory assetInfo) external;

    function registerToken(uint256 assetType, bytes memory assetInfo, uint256 quantum) external;

    function registerTokenAdmin(address newAdmin) external;

    function unregisterTokenAdmin(address oldAdmin) external;

    function withdraw(uint256 ownerKey, uint256 assetType) external;

    function withdrawAndMint(uint256 ownerKey, uint256 assetType, bytes memory mintingBlob) external;

    function withdrawNft(uint256 ownerKey, uint256 assetType, uint256 tokenId) external;

    event LogOperatorAdded(address operator);
    event LogOperatorRemoved(address operator);
    event LogRootUpdate(uint256 sequenceNumber, uint256 batchId, uint256 vaultRoot, uint256 orderRoot);
    event LogStateTransitionFact(bytes32 stateTransitionFact);
    event LogVaultBalanceChangeApplied(address ethKey, uint256 assetId, uint256 vaultId, int256 quantizedAmountChange);

    function STARKEX_MAX_DEFAULT_VAULT_LOCK() external view returns (uint256);

    function escape(uint256 starkKey, uint256 vaultId, uint256 assetId, uint256 quantizedAmount) external;

    function getLastBatchId() external view returns (uint256 batchId);

    function getOrderRoot() external view returns (uint256 root);

    function getOrderTreeHeight() external view returns (uint256 height);

    function getSequenceNumber() external view returns (uint256 seq);

    function getVaultRoot() external view returns (uint256 root);

    function getVaultTreeHeight() external view returns (uint256 height);

    function isOperator(address testedOperator) external view returns (bool);

    function registerOperator(address newOperator) external;

    function unregisterOperator(address removedOperator) external;

    function updateState(uint256[] memory publicInput, uint256[] memory applicationData) external;

    event LogFullWithdrawalRequest(uint256 starkKey, uint256 vaultId);

    function freezeRequest(uint256 starkKey, uint256 vaultId) external;

    function fullWithdrawalRequest(uint256 starkKey, uint256 vaultId) external;

    event LogDefaultVaultWithdrawalLockSet(uint256 newDefaultLockTime);
    event LogDepositToVault(
        address ethKey, uint256 assetId, uint256 vaultId, uint256 nonQuantizedAmount, uint256 quantizedAmount
    );
    event LogVaultWithdrawalLockSet(address ethKey, uint256 assetId, uint256 vaultId, uint256 timeRelease);
    event LogWithdrawalFromVault(
        address ethKey, uint256 assetId, uint256 vaultId, uint256 nonQuantizedAmount, uint256 quantizedAmount
    );

    function depositERC20ToVault(uint256 assetId, uint256 vaultId, uint256 quantizedAmount) external;

    function depositEthToVault(uint256 assetId, uint256 vaultId) external payable;

    function getQuantizedVaultBalance(address ethKey, uint256 assetId, uint256 vaultId)
        external
        view
        returns (uint256);

    function getVaultBalance(address ethKey, uint256 assetId, uint256 vaultId) external view returns (uint256);

    function getVaultWithdrawalLock(address ethKey, uint256 assetId, uint256 vaultId) external view returns (uint256);

    function isStrictVaultBalancePolicy() external view returns (bool);

    function isVaultLocked(address ethKey, uint256 assetId, uint256 vaultId) external view returns (bool);

    function lockVault(uint256 assetId, uint256 vaultId, uint256 lockTime) external;

    function setDefaultVaultWithdrawalLock(uint256 newDefaultTime) external;

    function withdrawFromVault(uint256 assetId, uint256 vaultId, uint256 quantizedAmount) external;

    event ImplementationActivationRescheduled(address indexed implementation, uint256 updatedActivationTime);

    function updateImplementationActivationTime(address implementation, bytes memory data, bool finalize) external;
}
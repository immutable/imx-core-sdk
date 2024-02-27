// Copyright (c) Immutable Pty Ltd 2018 - 2024
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {CoreV4} from "./CoreV4.sol";

/**
 * Emitted when there are no funds to withdraw when calling `withdrawAll`.
 */
error NoFundsToWithdraw(uint256 ethKey, uint256 starkKey);

/**
 * RegistrationV4 is a wrapper around the StarkEx contract to provide a more user-friendly interface for executing multiple transactions on the StarkEx contract at once.
 * This contract is not upgradeable. If an issue is found with this contract, a new version will be deployed.
 */
contract RegistrationV4 {
    CoreV4 public immutable imx;

    constructor(address payable _imx) {
        imx = CoreV4(_imx);
    }

    function registerAndWithdrawAll(address ethKey, uint256 starkKey, bytes calldata signature, uint256 assetType)
        external
    {
        if (!isRegistered(starkKey)) {
            imx.registerEthAddress(ethKey, starkKey, signature);
        }
        withdrawAll(uint160(ethKey), starkKey, assetType);
    }

    function withdrawAll(uint256 ethKey, uint256 starkKey, uint256 assetType) public {
        uint256 ethKeyBalance = imx.getWithdrawalBalance(ethKey, assetType);
        uint256 starkKeyBalance = imx.getWithdrawalBalance(starkKey, assetType);
        if (ethKeyBalance == 0 && starkKeyBalance == 0) {
            revert NoFundsToWithdraw(ethKey, starkKey);
        }

        if (ethKeyBalance > 0) {
            imx.withdraw(ethKey, assetType);
        }

        if (starkKeyBalance > 0) {
            imx.withdraw(starkKey, assetType);
        }
    }

    function registerAndWithdrawNft(
        address ethKey,
        uint256 starkKey,
        bytes calldata signature,
        uint256 assetType,
        uint256 tokenId
    ) external {
        if (!isRegistered(starkKey)) {
            imx.registerEthAddress(ethKey, starkKey, signature);
        }
        imx.withdrawNft(starkKey, assetType, tokenId);
    }

    function registerWithdrawAndMint(
        address ethKey,
        uint256 starkKey,
        bytes calldata signature,
        uint256 assetType,
        bytes calldata mintingBlob
    ) external {
        if (!isRegistered(starkKey)) {
            imx.registerEthAddress(ethKey, starkKey, signature);
        }
        imx.withdrawAndMint(starkKey, assetType, mintingBlob);
    }

    function getVersion() external view returns (string memory) {
        return imx.VERSION();
    }

    function isRegistered(uint256 starkKey) public view returns (bool) {
        return imx.getEthKey(starkKey) != address(0);
    }
}
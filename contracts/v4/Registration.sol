// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Core} from "./Core.sol";

contract Registration {
    Core public immutable imx;

    constructor(address payable _imx) {
        imx = Core(_imx);
    }

    function getVersion() external view returns (string memory) {
        return imx.VERSION();
    }

    function isRegistered(uint256 starkKey) public view returns (bool) {
        return imx.getEthKey(starkKey) != address(0);
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
        require(ethKeyBalance != 0 || starkKeyBalance != 0, "No funds to withdraw");

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
}
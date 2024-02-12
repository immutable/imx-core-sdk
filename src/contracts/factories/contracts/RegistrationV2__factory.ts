/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  RegistrationV2,
  RegistrationV2Interface,
} from "../../contracts/RegistrationV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Core",
        name: "_imx",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "imx",
    outputs: [
      {
        internalType: "contract Core",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
    ],
    name: "isRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ethKey",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
    ],
    name: "registerAndWithdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ethKey",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "starkKey",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "assetType",
        type: "uint256",
      },
    ],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class RegistrationV2__factory {
  static readonly abi = _abi;
  static createInterface(): RegistrationV2Interface {
    return new utils.Interface(_abi) as RegistrationV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RegistrationV2 {
    return new Contract(address, _abi, signerOrProvider) as RegistrationV2;
  }
}

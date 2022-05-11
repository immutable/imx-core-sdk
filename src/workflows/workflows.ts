import {Configuration, MintsApi, UsersApi} from "../api";
import { Signer } from "@ethersproject/abstract-signer";
import { registerOffchainWorkflow } from "./registration";
import { mintingWorkflow } from "./minting";
import { UnsignedMintRequest } from "../types";

export class Workflows {
    private readonly usersApi: UsersApi
    private readonly mintsApi: MintsApi
    constructor(protected configuration: Configuration) {
        this.usersApi = new UsersApi(configuration)
        this.mintsApi = new MintsApi(configuration)
    }

    public registerOffchain(signer: Signer) {
        return registerOffchainWorkflow(signer, this.usersApi)
    }

    public mint(signer: Signer, request: UnsignedMintRequest) {
        return mintingWorkflow(signer, request, this.mintsApi)
    }
}
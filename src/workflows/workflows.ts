import { Configuration, UsersApi } from "../api";
import { Signer } from "@ethersproject/abstract-signer";
import { registerOffchainWorkflow } from "./registration";

export class Workflows {
    private readonly usersApi: UsersApi
    constructor(protected configuration: Configuration) {
        this.usersApi = new UsersApi(configuration)
    }

    public registerOffchain(signer: Signer) {
        return registerOffchainWorkflow(signer, this.usersApi)
    }
}
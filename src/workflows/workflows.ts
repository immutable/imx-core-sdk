import { Configuration, UsersApi } from "../api";
import { Signer } from "@ethersproject/abstract-signer";
import { registerImxWorkflow } from "./registration";

export class Workflows {
    private readonly usersApi: UsersApi
    constructor(protected configuration: Configuration) {
        this.usersApi = new UsersApi(configuration)
    }

    public registerImx(signer: Signer) {
        return registerImxWorkflow(signer, this.usersApi)
    }
}
import { ImmutableX, Config, CreateProjectRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/wallet-connection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const projectParams: CreateProjectRequest = {
    company_name: '',
    contact_email: '',
    name: '',
  };

  try {
    const createProjectResponse = await imxClient.createProject(
      walletConnection.ethSigner,
      projectParams,
    );

    console.log('createProject', JSON.stringify(createProjectResponse));

    const getProjectResponse = await imxClient.getProject(
      walletConnection.ethSigner,
      createProjectResponse.id.toString(),
    );

    console.log('getProject', JSON.stringify(getProjectResponse));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

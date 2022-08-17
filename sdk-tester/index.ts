import { Utils, IMXClientClass } from '@imtbl/core-sdk';

(async () => {
  const config = Utils.Config.sandbox;

  const classClient = new IMXClientClass(config);
  // const factoryClient = IMXClientFactory(config);
  
  // API classes
  // const collectionsApi = new Apis.CollectionsApi();
  // const collections1 = await collectionsApi.listCollections();
  // console.group('Collections 1');
  // console.log(collections1.data.result.slice(0,5));
  // console.groupEnd();
  
  // IMX class client
  const collections2 = await classClient.listCollections();
  console.group('Collections 2');
  console.log(collections2.data.result.slice(0,5));
  console.groupEnd();

  // IMX factory client
  // const collections3 = await factoryClient.listCollections();
  // console.group('Collections 3');
  // console.log(collections3.data.result.slice(0,5));
  // console.groupEnd();
})();

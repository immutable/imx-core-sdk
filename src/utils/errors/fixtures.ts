export default {
  response: {
    status: 404,
    statusText: 'Not Found',
    headers: {},
    config: {
      method: 'post',
      data: `{"name":"Matt's Mats","company_name":"Matt's Mats","contact_email":"matt.muscat@immutable.com"}`,
      url: 'https://api.sandbox.x.immutable.com/v1/projects',
    },
    request: {
      method: 'POST',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      path: '/v1/projects',
      _ended: true,
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'api.sandbox.x.immutable.com',
      protocol: 'https:',
    },
    data: '404 page not found\n',
  },
  isAxiosError: true,
};

const apiPath = '/api/v1';

const routes = {
  loginPath: () => [apiPath, 'login'].join('/'),
  dataPath: () => [apiPath, 'data'].join('/'),
  signupPath: () => [apiPath, 'signup'].join('/'),
  indexPage: () => [''].join('/'),
  loginPage: () => ['/login'].join('/'),
  signupPage: () => ['/signup'].join('/'),
  notfoundPage: () => ['*'].join('/'),
};

export default routes;

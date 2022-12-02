const apiPath = '/api/v1';

const routes = {
  loginPath: () => [apiPath, 'login'].join('/'),
  dataPath: () => [apiPath, 'data'].join('/'),
  signupPath: () => [apiPath, 'signup'].join('/'),
  indexPage: () => '/',
  loginPage: () => '/login',
  signupPage: () => '/signup',
  notfoundPage: () => '*',
};

export default routes;

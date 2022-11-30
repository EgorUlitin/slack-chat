const apiPath = '/api/v1';
const pagePath = '';

const routes = {
  loginPath: () => [apiPath, 'login'].join('/'),
  dataPath: () => [apiPath, 'data'].join('/'),
  signupPath: () => [apiPath, 'signup'].join('/'),
  indexPage: () => [pagePath, ''].join('/'),
  loginPage: () => [pagePath, 'login'].join('/'),
  signupPage: () => [pagePath, 'signup'].join('/'),
  notfoundPage: () => [pagePath, '*'].join('/'),
};

export default routes;

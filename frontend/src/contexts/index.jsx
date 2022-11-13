import React from 'react';

import AuthProvider from './AuthProvider';
import ReduxProvider from './ReduxProvider';
import ApiProvider from './ApiProvider';

const Providers = ({ children, api }) => {
  return (
    <ApiProvider api={api}>
      <ReduxProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ReduxProvider>
    </ApiProvider>
  );
}

export default Providers;
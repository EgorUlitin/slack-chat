import React from 'react';

import AuthProvider from './AuthProvider';
import ReduxProvider from './ReduxProvider';
import ApiProvider from './ApiProvider';
import RollbarProvider from './RollbarProvider';

const Providers = ({ children, api }) => (
  <RollbarProvider>
    <ApiProvider api={api}>
      <ReduxProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ReduxProvider>
    </ApiProvider>
  </RollbarProvider>
);

export default Providers;

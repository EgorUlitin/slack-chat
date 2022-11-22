import React from 'react';

import AuthProvider from './AuthProvider';
import ReduxProvider from './ReduxProvider';
import ApiProvider from './ApiProvider';
import I18nextProvider from './I18nextProvider';

const Providers = ({ children, api }) => {
  return (
    <I18nextProvider>
      <ApiProvider api={api}>
        <ReduxProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ReduxProvider>
      </ApiProvider>
    </I18nextProvider>
  );
}

export default Providers;
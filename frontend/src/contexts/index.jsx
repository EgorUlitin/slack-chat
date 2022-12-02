import React from 'react';

import AuthProvider from './AuthProvider';
import ReduxProvider from './ReduxProvider';
import ApiProvider from './ApiProvider';
import RollbarProvider from './RollbarProvider';
import { I18nextProvider } from 'react-i18next';

const Providers = ({ children, api }) => (
  <RollbarProvider>
    <I18nextProvider>
      <ApiProvider api={api}>
        <ReduxProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ReduxProvider>
      </ApiProvider>
    </I18nextProvider>
  </RollbarProvider>
);

export default Providers;

import React from 'react';
import { I18nextProvider } from 'react-i18next';

import AuthProvider from './AuthProvider';
import ReduxProvider from './ReduxProvider';
import ApiProvider from './ApiProvider';
import RollbarProvider from './RollbarProvider';

const Providers = ({ children, api, i18nInstance }) => (
  <RollbarProvider>
    <I18nextProvider i18n={i18nInstance}>
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

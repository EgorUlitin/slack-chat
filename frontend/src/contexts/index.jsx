import React from 'react';

import AuthProvider from './AuthProvider';
import ReduxProvider from './ReduxProvider';
import ApiProvider from './ApiProvider';
import I18nextProvider from './I18nextProvider';
import RollbarProvider from './RollbarProvider';

const Providers = ({ children, api, i18nInstance }) => (
  <RollbarProvider>
    <I18nextProvider i18nInstance={i18nInstance}>
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

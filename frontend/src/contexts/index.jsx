import React from 'react';

import AuthProvider from './AuthProvider';
import ReduxProvider from './ReduxProvider';
import ApiProvider from './ApiProvider';
import I18nextProvider from './I18nextProvider';
import RollbarProvider from './RollbarProvider';

function Providers({ children, api }) {
  return (
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
}

export default Providers;

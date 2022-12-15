/* eslint-disable max-len */
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import { IApiFunctions } from '../interfaces';
import AuthProvider from './AuthProvider';
import ReduxProvider from './ReduxProvider';
import ApiProvider from './ApiProvider';
import RollbarProvider from './RollbarProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Providers = ({ children, api, i18nInstance }: { children: ReactNode, api: IApiFunctions, i18nInstance: any }) => (
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

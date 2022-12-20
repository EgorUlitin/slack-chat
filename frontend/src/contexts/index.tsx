/* eslint-disable max-len */
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from 'i18next';
import AuthProvider from './AuthProvider';
import ReduxProvider from './ReduxProvider';
import ApiProvider, { IApiFunctions } from './ApiProvider';
import RollbarProvider from './RollbarProvider';

type i18nInstanceType = typeof i18n;

const Providers = ({ children, api, i18nInstance }: { children: ReactNode, api: IApiFunctions, i18nInstance: i18nInstanceType }) => (
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

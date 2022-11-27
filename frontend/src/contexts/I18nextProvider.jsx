import React from 'react';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import resources from '../locales/index';

const i18nInstance = i18n.createInstance();

i18nInstance
  .use(initReactI18next)
  .init({
    lng: 'ru',
    debug: false,
    resources,
  });

const I18Provider = ({ children }) => (
  <I18nextProvider i18n={i18nInstance}>
    {children}
  </I18nextProvider>
);

export default I18Provider;

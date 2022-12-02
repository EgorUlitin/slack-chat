import React from 'react';
import { I18nextProvider } from 'react-i18next';

const I18Provider = ({ children, i18nInstance }) => (
  <I18nextProvider i18n={i18nInstance}>
    {children}
  </I18nextProvider>
);

export default I18Provider;

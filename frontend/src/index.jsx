import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import resources from './locales';

import './index.css';

import Component from './components/App';
import Providers from './contexts';
import apiFun from './api';

const app = async () => {
  const api = apiFun();

  const i18nInstance = i18n.createInstance();
  await i18nInstance
    .use(initReactI18next)
    .init({
      lng: 'ru',
      debug: false,
      resources,
    });

  const container = document.getElementById('root');
  const root = createRoot(container);

  root.render(
    <Providers api={api} i18nInstance={i18nInstance}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Providers>,
  );
};

app();

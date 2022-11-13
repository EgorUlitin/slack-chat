import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import './index.css';

import Component from './components/App.jsx';
import Providers from './contexts';
import apiFun from './api';

const api = apiFun();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Providers api={api}>
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  </Providers>
);
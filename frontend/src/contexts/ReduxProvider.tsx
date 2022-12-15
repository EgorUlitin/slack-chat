import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../slices/index';

const ReduxProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default ReduxProvider;

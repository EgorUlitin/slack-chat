import React, { useMemo, createContext, useContext } from 'react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const ApiContext = createContext({});

const ApiProvider = ({ children, api }) => {
  const { t } = useTranslation();

  const connect = useCallback(() => api.connect(), [api]);
  const disconnect = useCallback(() => api.disconnect(), [api]);
  const createNewMessage = useCallback((message) => api.createMessage(message), [api]);
  const createNewChannel = useCallback((name) => api.createNewChannel(t)(name), [api, t]);
  const apiRemoveChannel = useCallback((id) => api.apiRemoveChannel(t)(id), [api, t]);
  const apiRenameChannel = useCallback((data) => api.apiRenameChannel(t)(data), [api, t]);

  const value = useMemo(() => ({
    connect,
    disconnect,
    createNewMessage,
    createNewChannel,
    apiRemoveChannel,
    apiRenameChannel
  }), [
    connect,
    disconnect,
    createNewMessage,
    createNewChannel,
    apiRemoveChannel,
    apiRenameChannel
  ])

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  )
};

export const useApi = () => useContext(ApiContext);

export default ApiProvider;
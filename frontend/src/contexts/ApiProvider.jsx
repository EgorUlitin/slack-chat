import React, { useMemo, createContext, useContext } from 'react';
import { useCallback } from 'react';

const ApiContext = createContext({});

const ApiProvider = ({ children, api }) => {

  const connect = useCallback(() => api.connect(), [api]);
  const disconnect = useCallback(() => api.disconnect(), [api]);
  const createNewMessage = useCallback((message) => api.createMessage(message), [api]);
  const createNewChannel = useCallback((name) => api.createNewChannel(name), [api]);
  const apiRemoveChannel = useCallback((id) => api.apiRemoveChannel(id), [api]);
  const apiRenameChannel = useCallback((data) => api.apiRenameChannel(data), [api]);

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
import React, { useMemo, createContext, useContext } from 'react';
import { useCallback } from 'react';

const ApiContext = createContext({});

const ApiProvider = ({ children, api }) => {

  const connect = useCallback(() => api.connect(), [api]);
  const disconnect = useCallback(() => api.disconnect(), [api]);
  const createNewMessage = useCallback((message) => api.createMessage(message), [api])
  const createNewChannel = useCallback((name) => api.createNewChannel(name), [api])

  const value = useMemo(() => ({
    connect,
    disconnect,
    createNewMessage,
    createNewChannel
  }), [
    connect,
    disconnect,
    createNewMessage,
    createNewChannel
  ])

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  )
};

export const useApi = () => useContext(ApiContext);

export default ApiProvider;
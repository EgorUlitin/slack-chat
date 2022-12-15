import React, {
  useMemo, createContext, useContext, useCallback, ReactNode,
} from 'react';
import { useTranslation } from 'react-i18next';
import { IApiFunctions, IApiContext } from 'interfaces';

interface IData {
  name: string
  id: number
}

const ApiContext = createContext<IApiContext>({} as IApiContext);

const ApiProvider = ({ children, api }: { children: ReactNode, api: IApiFunctions }) => {
  const { t } = useTranslation();

  const connect = useCallback(() => api.connect(), [api]);
  const disconnect = useCallback(() => api.disconnect(), [api]);
  const createNewMessage = useCallback((message: string) => api.createMessage(message), [api]);
  const createNewChannel = useCallback((name: string) => api.createNewChannel(t)(name), [api, t]);
  const apiRemoveChannel = useCallback((id: number) => api.apiRemoveChannel(t)(id), [api, t]);
  const apiRenameChannel = useCallback((data: IData) => api.apiRenameChannel(t)(data), [api, t]);

  const value = useMemo(() => ({
    connect,
    disconnect,
    createNewMessage,
    createNewChannel,
    apiRemoveChannel,
    apiRenameChannel,
  }), [
    connect,
    disconnect,
    createNewMessage,
    createNewChannel,
    apiRemoveChannel,
    apiRenameChannel,
  ]);

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);

export default ApiProvider;

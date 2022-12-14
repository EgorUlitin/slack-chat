import { ReactNode } from 'react';

export interface IChildren {
  children?: ReactNode
}

export interface IUser {
  username: string;
  token: string;
}

export interface IApiFunctions {
  connect: Function
  disconnect: Function
  createMessage: Function
  createNewChannel: Function
  apiRemoveChannel: Function
  apiRenameChannel: Function
}

export interface IAuthContext {
  user: IUser
  logIn: (user: IUser) => void
  logOut: () => void
}

export interface IApiContext {
  connect: () => void
  disconnect: () => void
  createNewMessage: Function
  createNewChannel: Function
  apiRemoveChannel: Function
  apiRenameChannel: Function
}

export interface IMessage {
  username: string
  body: string
  id: number
  channelId?: number
}

export interface IChannel {
  id: number
  name: string
  removable: boolean
}

export interface IUserData {
  id: number
  username: string
  password: string
}

export interface IState {
  channels: IChannel[]
  messages: IMessage[]
  currentChannelId: number
  users: IUserData[]
}

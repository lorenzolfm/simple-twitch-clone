import { SignInAction, SignOutAction } from '.';
import { CreateStreamAction, DeleteStreamAction, EditStreamAction, FetchStreamAction, FetchStreamsAction } from './stream';

export enum ActionTypes {
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SING_OUT',
  CREATE_STREAM = 'CREATE_STREAM',
  FETCH_STREAMS = 'FETCH_STREAMS',
  FETCH_STREAM = 'FETCH_STREAM',
  DELETE_STREAM = 'DELETE_STREAM',
  EDIT_STREAM = 'EDIT_STREAM',
}

export type Action = SignInAction |
SignOutAction |
CreateStreamAction |
FetchStreamsAction |
FetchStreamAction |
EditStreamAction |
DeleteStreamAction;

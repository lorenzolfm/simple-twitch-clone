import { combineReducers } from 'redux';
import { FormStateMap, reducer as formReducer } from 'redux-form';

import { authReducer } from './authReducer';
import { AuthState, StreamsState } from '../types';
import { streamReducer } from './streamReducers';

export interface StoreState {
  auth: AuthState;
  form: FormStateMap;
  streams: StreamsState;
}

export const reducers = combineReducers<StoreState>({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});

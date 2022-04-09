import { combineReducers } from 'redux';

import { Auth, authReducer } from './authReducer';

export interface StoreState {
  auth: Auth;
}

export const reducers = combineReducers<StoreState>({
  auth: authReducer,
});

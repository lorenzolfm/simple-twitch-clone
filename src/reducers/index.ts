import { combineReducers } from 'redux';
import { FormStateMap, reducer as formReducer } from 'redux-form';

import { Auth, authReducer } from './authReducer';

export interface StoreState {
  auth: Auth;
  form: FormStateMap;
}

export const reducers = combineReducers<StoreState>({
  auth: authReducer,
  form: formReducer,
});

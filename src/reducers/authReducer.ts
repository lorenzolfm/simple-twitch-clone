import { Action, ActionTypes } from '../actions';
import { AuthState } from '../types';

const INITIAL_STATE: AuthState = {
  isSignedIn: null,
  userId: null,
};

export const authReducer = (
  state: AuthState = INITIAL_STATE,
  action: Action,
) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case ActionTypes.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

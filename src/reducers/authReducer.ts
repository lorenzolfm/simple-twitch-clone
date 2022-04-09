import { Action, ActionTypes } from '../actions/types';

export interface Auth {
  isSignedIn: boolean | null;
}

const INITIAL_STATE: Auth = {
  isSignedIn: null,
};

export const authReducer = (
  state: Auth = INITIAL_STATE,
  action: Action,
) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return { ...state, isSignedIn: true };
    case ActionTypes.SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

import { Action, ActionTypes } from '../actions';

export interface Auth {
  isSignedIn: boolean | null;
  userId: string | null;
}

const INITIAL_STATE: Auth = {
  isSignedIn: null,
  userId: null,
};

export const authReducer = (
  state: Auth = INITIAL_STATE,
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

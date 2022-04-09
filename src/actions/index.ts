import { ActionTypes } from './types';

export interface SignInAction {
  type: ActionTypes.SIGN_IN;
}

export interface SignOutAction {
  type: ActionTypes.SIGN_OUT;
}

export const signIn = () => {
  return {
    type: ActionTypes.SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: ActionTypes.SIGN_OUT,
  };
};

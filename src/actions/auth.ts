import { ActionTypes } from './types';

export interface SignInAction {
  type: ActionTypes.SIGN_IN;
  payload: string,
}

export interface SignOutAction {
  type: ActionTypes.SIGN_OUT;
}

export const signIn = (userId: string) => {
  return {
    type: ActionTypes.SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: ActionTypes.SIGN_OUT,
  };
};

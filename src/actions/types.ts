import { SignInAction, SignOutAction } from '.';

export enum ActionTypes {
  SIGN_IN,
  SIGN_OUT,
}

export type Action = SignInAction | SignOutAction;

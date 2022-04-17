import { SignInAction, SignOutAction } from '.';

export enum ActionTypes {
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SING_OUT',
}

export type Action = SignInAction | SignOutAction;

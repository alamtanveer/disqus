import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoadAuth = '[Auth] Load Auth',
  LoadAuthError = '[Auth] Load Auth Error',
}

export class AuthAction implements Action {
  type: string; 
  payload: {
    authData: Array<any>,
    error: string
  };
}

export class LoadAuth implements Action {
  readonly type = AuthActionTypes.LoadAuth;
  constructor(readonly payload: { authData: any }) {

  }
}

export class LoadAuthError implements Action {
  readonly type = AuthActionTypes.LoadAuthError;
  constructor(readonly payload: { error: string }) {

  }
}


export type DisqusActions = LoadAuth | LoadAuthError ;

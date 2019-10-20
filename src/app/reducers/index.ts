import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer, Action} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthAction, AuthActionTypes } from '../actions/disqus.actions';


export interface AuthState {
  AuthData : Array<any>;
  allUsers : Array<any>;
}

const initialAuthState: AuthState = {
  AuthData : [],
  allUsers : []
}

export interface AppState {
  AuthData: AuthState;
}

export function authReducer(state: AuthState = initialAuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoadAuth:
      debugger;
      let data = Object.assign([], state.allUsers);      
      let auth:any = action.payload.authData;
      let index = data.findIndex(res => res.userId == auth.userId);
      if (index == -1){
        data.push(auth)
      }
      return {
        ...state, AuthData: action.payload.authData, allUsers:data
      };

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
  AuthData: authReducer
};

export const selectAuthData = (state: AppState) => state.AuthData.AuthData;
export const selectAllUsers = (state: AppState) => state.AuthData.allUsers;

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];

import { Action } from '@ngrx/store';
import { Authenticate, User } from '../../models/user';

export enum AuthActionTypes {
  Login ='[Auth] Login',
  Logout= '[Auth] Logout',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LoginRedirect = '[Auth] Login Redirect',
}

export class Login implements Action {
  public readonly type = AuthActionTypes.Login;

  constructor(public payload : Authenticate) {}
}

export class LoginSuccess implements Action {
  public readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: any) {}
}

export class LoginFailure implements Action {
  public readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class LoginRedirect implements Action {
  public readonly type = AuthActionTypes.LoginRedirect;
}

export class Logout implements Action {
  public readonly type = AuthActionTypes.Logout;
}
export type AuthActions =
| Login
| LoginSuccess
| LoginFailure
| LoginRedirect
| Logout;

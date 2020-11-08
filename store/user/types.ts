export enum UserActionTypes {
  USER_LOGGED_IN = 'USER_USER_LOGGED_IN',
  USER_NOT_LOGGED_IN = 'USER_NOT_LOGGED_IN',
  USER_LOGIN_REQUESTED = 'USER_LOGIN_REQUESTED',
}

export interface IActionUserLoggedIn {
  type: UserActionTypes.USER_LOGGED_IN;
  payload: string;
}
export interface IActionUserNotLoggedIn {
  type: UserActionTypes.USER_NOT_LOGGED_IN;
}
export interface IActionUserLoginRequested {
  type: UserActionTypes.USER_LOGIN_REQUESTED;
  payload: UserLoginPayload;
}

export type UserActions =
  | IActionUserLoggedIn
  | IActionUserNotLoggedIn
  | IActionUserLoginRequested;

export interface UserState {
  email: string;
  uid: string;
  profileLoaded: boolean;
}
interface UserLoginPayload {
  email: string;
  password: string;
}

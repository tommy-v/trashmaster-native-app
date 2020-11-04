export enum UserActionTypes {
  USER_LOGGED_IN = 'USER_USER_LOGGED_IN',
  USER_NOT_LOGGED_IN = 'USER_NOT_LOGGED_IN',
}

export interface IActionUserLoggedIn {
  type: UserActionTypes.USER_LOGGED_IN;
  payload: string;
}
export interface IActionUserNotLoggedIn {
  type: UserActionTypes.USER_NOT_LOGGED_IN;
}

export type UserActions = IActionUserLoggedIn | IActionUserNotLoggedIn;

export interface UserState {
  email: string;
}

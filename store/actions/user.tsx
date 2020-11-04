export const USER_LOGIN_REQUESTED = 'USER_LOGIN_REQUESTED'; // Don't know why but best practice ¯\_(ツ)_/¯
export const USER_LOGIN_SUCCEEDED = 'USER_LOGIN_SUCCEEDED';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_ERROR_DISPLAY_TIMER = 'USER_ERROR_DISPLAY_TIMER';
export const USER_CLEAN_ERRORS = 'USER_CLEAN_ERRORS';

export function login(email: string, password: string) {
  return {
    type: USER_LOGIN_REQUESTED,
    payload: { email, password },
  };
}
// export function setUser(token) {
//   return {
//     type: USER_LOGIN_SUCCEEDED,
//     payload: { token },
//   };
// }
// export function userError(error) {
//   return {
//     type: USER_LOGIN_FAILED,
//     payload: { error },
//   };
// }
export function logout() {
  return {
    type: USER_LOGOUT,
  };
}

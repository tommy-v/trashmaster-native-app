import { UserActions, UserActionTypes, UserState } from './types';

const initialState: UserState = {
  email: '',
  uid: '',
  profileLoaded: false,
};

export default (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.USER_LOGGED_IN:
      return {
        ...state,
        uid: action.payload,
        profileLoaded: true,
      };
    case UserActionTypes.USER_NOT_LOGGED_IN:
      return {
        ...initialState,
        profileLoaded: true,
      };
    case UserActionTypes.USER_LOGIN_REQUESTED:
      return state;
    default:
      return state;
  }
};

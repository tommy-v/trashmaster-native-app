import { UserActions, UserActionTypes, UserState } from './types';

const initialState: UserState = {
  email: '',
};

export default (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.USER_LOGGED_IN:
      return {
        ...state,
        email: action.payload,
      };
    case UserActionTypes.USER_NOT_LOGGED_IN:
      return initialState;
    default:
      return state;
  }
};

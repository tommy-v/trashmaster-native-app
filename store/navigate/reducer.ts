import { NavigationState } from './types';
import { NAVIGATE } from './actions';

const initialState: NavigationState = {
  path: '/',
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case NAVIGATE:
      return {
        ...state,
        path: action.payload,
      };
    default:
      return state;
  }
};

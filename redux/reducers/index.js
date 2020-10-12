import {combineReducers} from 'redux';
import user from './user';
import global from './global';
import trash from './trash';

const appReducer = combineReducers({
  user,
  global,
  trash,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

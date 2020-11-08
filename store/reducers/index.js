import { combineReducers } from 'redux';
import user from '../user/reducers';
import global from './global';
import trash from './trash';
import navigation from '../navigate/reducer';

const appReducer = combineReducers({
  user,
  global,
  trash,
  navigation,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

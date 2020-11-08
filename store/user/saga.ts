import { takeEvery } from 'redux-saga/effects';
import { IActionUserLoginRequested, UserActionTypes } from './types';
import userService from '../../services/user.service';

function* redirectToLogin() {
  // yield put({ type: 'NAVIGATE', payload: '/login' });
}

function* redirectToMap() {
  // alert('go')
  // yield put({ type: 'NAVIGATE', payload: '/map' });
}

function* requestLogin(action: IActionUserLoginRequested) {
  try {
    yield userService.userLogin(action.payload.email, action.payload.password);
  } catch (error) {
    console.log(`Error ${error}`);
  }
}

export default function* userSaga(): Generator {
  yield takeEvery(UserActionTypes.USER_NOT_LOGGED_IN, redirectToLogin);
  yield takeEvery(UserActionTypes.USER_LOGGED_IN, redirectToMap);
  yield takeEvery(UserActionTypes.USER_LOGIN_REQUESTED, requestLogin);
}

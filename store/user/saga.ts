import { takeEvery, put } from 'redux-saga/effects';
import { UserActionTypes } from './types';

function* redirectToLogin() {
  yield put({ type: 'NAVIGATE', payload: '/login' });
}

export default function* userSaga(): Generator {
  yield takeEvery(UserActionTypes.USER_NOT_LOGGED_IN, redirectToLogin);
}

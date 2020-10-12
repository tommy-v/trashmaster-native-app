import {all} from 'redux-saga/effects';
import userSaga from './user';
import trashSaga from './trash';

export default function* rootSaga() {
  yield all([userSaga(), trashSaga()]);
}

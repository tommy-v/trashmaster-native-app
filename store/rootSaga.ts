import { all } from 'redux-saga/effects';
import userSaga from './user/saga';
import trashSaga from './sagas/trash';

export default function* rootSaga() {
  yield all([userSaga(), trashSaga()]);
}

import {takeEvery, put} from 'redux-saga/effects';
import {
  TRASH_GET_ALL_REQUESTED,
  TRASH_GET_ALL_SUCCEEDED,
  TRASH_GET_ALL_FAILED,
} from '../actions/trash';
import TrashService from '../../services/trash.service';

function* getAllTrashes() {
  try {
    const dataMapTrashes = yield TrashService.getAllMapTrashes();
    yield put({
      type: TRASH_GET_ALL_SUCCEEDED,
      payload: {mapTrashes: dataMapTrashes},
    });
  } catch (e) {
    yield put({
      type: TRASH_GET_ALL_FAILED,
      payload: {error: {}},
    });
  }
}

function* trashSaga() {
  yield takeEvery(TRASH_GET_ALL_REQUESTED, getAllTrashes);
}

export default trashSaga;

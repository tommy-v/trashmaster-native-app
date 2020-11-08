// import history from '../../history';
import { ForkEffect, takeEvery } from 'redux-saga/effects';
import { NavigationActions, NavigationActionTypes } from './types';

export function* goTo(action: NavigationActions): Generator<void> {
  // yield history.push(action.payload);
}

function* navigationSaga(): Generator<ForkEffect<void>> {
  yield takeEvery(NavigationActionTypes.NAVIGATION_GO_TO, goTo);
}

export default navigationSaga;

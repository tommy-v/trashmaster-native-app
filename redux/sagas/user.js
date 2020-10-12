// import UserService from '../../services/user.service';
import { put, takeEvery } from 'redux-saga/effects';
import { NAVIGATE } from '../actions/navigate';
import { 
   USER_LOGIN_REQUESTED,
   USER_LOGIN_SUCCEEDED,
   USER_LOGIN_FAILED,
   USER_LOGOUT,
   USER_ERROR_DISPLAY_TIMER,
   USER_CLEAN_ERRORS,
} from '../actions/user';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* login(action) {
//    try {
//       const dataUser = yield UserService.login(action.payload.email, action.payload.password);
//       yield put({ type: USER_LOGIN_SUCCEEDED, payload: { token: dataUser.token } });
//       yield put({ type:  NAVIGATE, payload: '/home' });
//    } catch (e) {
//       yield put({ type: USER_LOGIN_FAILED, payload: { message: e.message } });
//       yield put({ type: USER_ERROR_DISPLAY_TIMER, payload: {} });
//    }
// }

// function* logout() {
//    yield put({ type: 'RESET' }); // Where can I put this const
// }

// function* cleanError() {
//       yield new Promise(resolve => setTimeout(() => resolve() , 2000)); // Wait 2 secs
//       yield put({ type: USER_CLEAN_ERRORS, payload: {} })
// }

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
   // yield takeEvery(USER_LOGIN_REQUESTED, login);
   // yield takeEvery(USER_LOGOUT, logout);
   // yield takeEvery(USER_ERROR_DISPLAY_TIMER, cleanError);
}

export default mySaga;

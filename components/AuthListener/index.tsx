import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { UserActionTypes } from '../../store/user/types';

// Renderless component
export default function AuthListener(): null {
  const dispatch = useDispatch();

  auth().onAuthStateChanged((user: any | null) => {
    user
      ? dispatch({ type: UserActionTypes.USER_LOGGED_IN, payload: user.uid })
      : dispatch({ type: UserActionTypes.USER_NOT_LOGGED_IN });
  });

  return null;
}

import { NavigationState } from './navigate/types';
import { UserState } from './user/types';

export interface RootState {
  navigation: NavigationState;
  user: UserState;
}

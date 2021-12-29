import { AnyAction } from 'redux';
import { UserWithId } from '../../App';

export const setCurrentUser = (user: UserWithId | null): AnyAction => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});

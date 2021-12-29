import { AnyAction } from 'redux';
import { UserWithId } from '../../App';
import { UserActionTypes } from './user.types';

export const setCurrentUser = (user: UserWithId | null): AnyAction => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

import { UserWithId } from '../../interfaces';
import { UserActionTypes, IUserAction } from './user.types';

export const setCurrentUser = (user: UserWithId | null): IUserAction => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

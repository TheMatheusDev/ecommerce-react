import { UserWithId } from '../../App';

export interface IUserAction {
  type: string;
  payload: UserWithId | null;
}

export enum UserActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

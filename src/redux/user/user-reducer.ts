import { AnyAction } from 'redux';
import { UserWithId } from '../../App';
import { UserActionTypes } from './user.types';

interface IDefaultState {
  currentUser: UserWithId | null;
}

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state: IDefaultState = INITIAL_STATE, action: AnyAction): IDefaultState => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

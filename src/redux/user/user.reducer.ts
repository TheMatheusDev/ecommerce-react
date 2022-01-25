import { UserWithId } from '../../interfaces';
import { UserActionTypes, IUserAction } from './user.types';

interface IState {
  currentUser: UserWithId | null;
}

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action: IUserAction): IState => {
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

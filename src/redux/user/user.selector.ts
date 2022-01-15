import { createSelector } from 'reselect';
import { IState } from '../../components/header/header';

const selectUser = (state: IState) => state.user;
export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);

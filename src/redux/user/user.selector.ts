import { createSelector } from 'reselect';
import { IState } from '../../interfaces';

const selectUser = (state: IState) => state.user;
export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);

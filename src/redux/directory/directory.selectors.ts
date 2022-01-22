import { createSelector } from 'reselect';
import { IState } from '../../interfaces';

const selectDirectory = (state: IState) => state.directory;

export const selectDirectorySections = createSelector([selectDirectory], (directory) => directory.sections);

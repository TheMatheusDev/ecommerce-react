import { createSelector } from 'reselect';
import { IState } from '../../interfaces';

const selectShop = (state: IState) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

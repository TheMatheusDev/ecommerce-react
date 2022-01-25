import { createSelector } from 'reselect';
import { IState } from '../../interfaces';
import memoize from 'lodash.memoize';

const selectShop = (state: IState) => state.shop;

const selectCollections = createSelector([selectShop], (shop) => shop.collections);

const selectCollection = memoize((collectionUrlParam: string | undefined) =>
  // @ts-ignore
  createSelector([selectCollections], (collections) => collections[collectionUrlParam]),
);

const selectCollectionAsArray = createSelector([selectCollections], (collections) =>
  // @ts-ignore
  Object.keys(collections).map((key) => collections[key]),
);

export { selectCollections, selectCollection, selectCollectionAsArray };

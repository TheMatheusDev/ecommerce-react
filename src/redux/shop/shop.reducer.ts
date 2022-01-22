import { Action } from 'redux';
import ShopData from './Shop.data';

const INITIAL_STATE = {
  collections: ShopData,
};

const shopReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;

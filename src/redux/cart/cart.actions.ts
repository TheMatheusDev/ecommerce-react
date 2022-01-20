import { IItem } from '../../interfaces';
import { CartActionTypes, ICartAction } from './cart.types';

export const toggleCartHidden = (): ICartAction => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: IItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item: IItem) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

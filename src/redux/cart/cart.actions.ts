import { IItem } from '../../interfaces';
import { CartActionTypes, ICartAction } from './cart.types';

const toggleCartHiddenAction = (): ICartAction => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

const addItemAction = (item: IItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

const removeItemAction = (item: IItem) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

const clearItemAction = (item: IItem) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item,
});

export { toggleCartHiddenAction, addItemAction, removeItemAction, clearItemAction };

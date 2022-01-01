import { IItem } from '../../components/collection-preview/collection-preview';
import { CartActionTypes, ICartAction } from './cart.types';

export const toggleCartHidden = (): ICartAction => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: IItem) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

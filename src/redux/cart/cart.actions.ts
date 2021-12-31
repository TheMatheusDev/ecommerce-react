import { CartActionTypes, ICartAction } from './cart.types';

export const toggleCartHidden = (): ICartAction => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

import { IItem } from '../../interfaces';
import { CartActionTypes, ICartAction } from './cart.types';
import { addItemToCart } from './cart.utils';

interface IState {
  hidden: boolean;
  cartItems: IItem[];
}

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state: IState = INITIAL_STATE, action: ICartAction) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionTypes.ADD_ITEM:
      // Esse if abaixo sempre retornará "true"
      // If para evitar o "possivel unknown property na linha 28"
      if (action.payload) {
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload),
        };
      }

    default:
      return state;
  }
};

export default cartReducer;

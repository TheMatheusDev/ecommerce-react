import { IStateCartReducer } from '../../interfaces';
import { CartActionTypes, ICartAction } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state: IStateCartReducer = INITIAL_STATE, action: ICartAction) => {
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

    case CartActionTypes.REMOVE_ITEM:
      if (action.payload) {
        return {
          ...state,
          cartItems: removeItemFromCart(state, action),
        };
      }

    default:
      return state;
  }
};

export default cartReducer;

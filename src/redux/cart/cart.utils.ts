import { IItem, IStateCartReducer } from '../../interfaces';
import { ICartAction } from './cart.types';

const addItemToCart = (cartItems: IItem[], cartItemToAdd: IItem) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeItemFromCart = (state: IStateCartReducer, action: ICartAction) =>
  state.cartItems.filter((cartItem) => cartItem.id !== action.payload?.id);

export { addItemToCart, removeItemFromCart };

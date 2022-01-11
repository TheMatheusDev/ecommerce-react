import { IItem } from '../../components/collection-preview/collection-preview';

export const addItemToCart = (cartItems: IItem[], cartItemToAdd: IItem) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
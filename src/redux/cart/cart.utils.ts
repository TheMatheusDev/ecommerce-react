import { IItem } from '../../interfaces';

const addItem = (cartItems: IItem[], cartItemToAdd: IItem) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeItem = (cartItems: IItem[], cartItemToRemove: IItem) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
  );
};

const clearItem = (cartItems: IItem[], cartItemToClear: IItem) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export { addItem, removeItem, clearItem };

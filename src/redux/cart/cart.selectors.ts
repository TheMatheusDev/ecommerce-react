import { createSelector } from 'reselect';
import { IState } from '../../components/header/header';

const selectCart = (state: IState) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulatedQtt, cartItem) => accumulatedQtt + cartItem.quantity, 0),
);

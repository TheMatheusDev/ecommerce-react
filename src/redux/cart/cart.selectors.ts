import { createSelector } from 'reselect';
import { IState } from '../../interfaces';

const selectCart = (state: IState) => state.cart;

const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulatedQtt, cartItem) => accumulatedQtt + cartItem.quantity, 0),
);

export { selectCartItems, selectCartHidden, selectCartItemsCount };

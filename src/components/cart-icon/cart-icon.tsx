import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { IState } from '../header/header';
import './cart-icon.scss';

const CartIcon: FC = () => {
  const dispatch = useDispatch();

  const state = useSelector((state: IState) => state);
  const cartQuantity = selectCartItemsCount(state);

  /*   const cartQuantity = useSelector(({ cart: { cartItems } }: IState) =>
    cartItems.reduce((accumulatedQtt, cartItem) => accumulatedQtt + cartItem.quantity, 0),
  ); */

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;

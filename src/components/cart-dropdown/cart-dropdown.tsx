import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../header/header';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown: FC = () => {
  const state = useSelector((state: IState) => state);
  const cartItems = selectCartItems(state);

  /* const cartItems = useSelector(({ cart: { cartItems } }: IState) => cartItems, isEqual); */

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItems) => (
          <CartItem key={cartItems.id} {...cartItems} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;

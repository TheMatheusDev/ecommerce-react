import { FC } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';
import { IState } from '../header/header';
import './cart-dropdown.scss';

const CartDropdown: FC = () => {
  const cartItems = useSelector((state: IState) => state.cart.cartItems);

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

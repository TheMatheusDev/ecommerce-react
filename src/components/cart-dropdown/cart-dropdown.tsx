import { FC } from 'react';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';

const CartDropdown: FC = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton isGoogleSignIn={false}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;

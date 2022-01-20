import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IItem } from '../../interfaces';
import { addItemAction, clearItemAction, removeItemAction } from '../../redux/cart/cart.actions';
import './checkout-item.scss';

const CheckoutItem: FC<IItem> = (cartItem) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItemAction(cartItem))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItemAction(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => dispatch(clearItemAction(cartItem))}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

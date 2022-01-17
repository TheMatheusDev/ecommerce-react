import { FC } from 'react';
import { IItem } from '../../interfaces';
import './checkout-item.scss';

interface IProps {
  cartItem: IItem;
}

const CheckoutItem: FC<IProps> = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;

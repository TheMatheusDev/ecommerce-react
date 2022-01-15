import { FC } from 'react';
import { IItem } from '../../interfaces';
import './cart-item.scss';

const CartItem: FC<IItem> = ({ imageUrl, price, name, quantity }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;

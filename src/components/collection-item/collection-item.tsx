import { FC } from 'react';
import CustomButton from '../custom-button/custom-button';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { IItem } from '../../interfaces';
import './collection-item.scss';

const CollectionItem: FC<IItem> = (item) => {
  const { imageUrl, price, name } = item;
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;

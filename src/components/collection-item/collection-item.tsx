import { FC } from 'react';
import CustomButton from '../custom-button/custom-button';
import './collection-item.scss';
import { useDispatch } from 'react-redux';
import { IItem } from '../collection-preview/collection-preview';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem: FC<IItem> = (item) => {
  const { imageUrl, price, name } = item;
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;

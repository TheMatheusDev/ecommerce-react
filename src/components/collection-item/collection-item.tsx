import './collection-item.scss';
import { IITems } from '../collection-preview/collection-preview';

const CollectionItem = ({ name, price, imageUrl }: IITems) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;

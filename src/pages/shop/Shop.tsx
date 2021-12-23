import { FC } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import ShopData from './Shop.data';

const ShopPage: FC = () => {
  return (
    <div className="shop-page">
      {ShopData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;

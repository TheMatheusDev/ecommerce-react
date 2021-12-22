import CollectionPreview from '../../components/collection-preview/collection-preview';
import ShopData from './shop.data';

const ShopPage = () => {
  return (
    <div className="shop-page">
      {ShopData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;

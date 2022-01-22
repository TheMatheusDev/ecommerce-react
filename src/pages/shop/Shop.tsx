import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage: FC = () => {
  const collections = useSelector(selectCollections);
  return (
    <div className="shop-page">
      {collections.map((collections) => (
        // @ts-ignore
        <CollectionPreview key={collections.id} title={collections.title} items={collections.items} />
      ))}
    </div>
  );
};

export default ShopPage;

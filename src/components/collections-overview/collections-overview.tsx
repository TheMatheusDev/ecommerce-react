import { useSelector } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview';

const CollectionOverview = () => {
  const collections = useSelector(selectCollections);

  return (
    <div className="collections-overview">
      {collections.map((collections) => (
        //@ts-ignore
        <CollectionPreview key={collections.id} title={collections.title} items={collections.items} />
      ))}
    </div>
  );
};

export default CollectionOverview;

import { useSelector } from 'react-redux';
import { IItem } from '../../interfaces';
import { selectCollectionAsArray } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview';

export interface ICollections {
  id: number;
  title: string;
  routeName: string;
  items: IItem[];
}

const CollectionOverview = () => {
  const collections: ICollections[] = useSelector(selectCollectionAsArray);

  return (
    <div className="collections-overview">
      {collections.map((collections: ICollections) => (
        <CollectionPreview key={collections.id} {...collections} />
      ))}
    </div>
  );
};

export default CollectionOverview;

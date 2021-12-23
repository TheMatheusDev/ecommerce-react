import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';
import { FC } from 'react';

export interface IITems {
  id?: number;
  key?: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface IProps {
  title: string;
  items: IITems[];
}

const CollectionPreview: FC<IProps> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

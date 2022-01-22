import { FC } from 'react';
import { IItem } from '../../interfaces';
import CollectionItem from '../collection-item/collection-item';
import './collection-preview.scss';

interface IProps {
  title: string;
  items: IItem[];
}

const CollectionPreview: FC<IProps> = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

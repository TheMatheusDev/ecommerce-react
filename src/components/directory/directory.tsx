import { useState } from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

const state = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'women',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/women',
    },
    {
      title: 'men',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/men',
    },
  ],
};

export type MenuItemProps = {
  title: string;
  imageUrl: string;
  id?: number;
  size?: string;
  linkUrl: string;
};

const Directory = () => {
  const [menuItemState, setMenuItemState] = useState(state);
  return (
    <div className="directory-menu">
      {menuItemState.sections.map(({ title, imageUrl, id, linkUrl, size }) => (
        <MenuItem title={title} imageUrl={imageUrl} key={id} linkUrl={linkUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;

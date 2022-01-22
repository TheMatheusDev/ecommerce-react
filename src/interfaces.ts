import ShopData from './redux/shop/Shop.data';

interface UserWithId {
  id: string;
  displayName: string;
  email: string;
  createdAt: string;
}

interface IItem {
  id?: number;
  key?: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface ISections {
  title: string;
  imageUrl: string;
  id?: number;
  size?: string;
  linkUrl: string;
}

type collections = ReturnType<() => typeof ShopData>;

interface IState {
  user: {
    currentUser: UserWithId | null;
  };
  cart: {
    hidden: boolean;
    cartItems: IItem[];
  };
  directory: { sections: ISections[] };
  shop: { collections: collections[] };
}

export type { UserWithId, IItem, ISections, IState };

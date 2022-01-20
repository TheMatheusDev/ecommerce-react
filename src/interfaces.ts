export interface UserWithId {
  id: string;
  displayName: string;
  email: string;
  createdAt: string;
}

export interface IItem {
  id?: number;
  key?: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface IState {
  user: {
    currentUser: UserWithId | null;
  };
  cart: {
    hidden: boolean;
    cartItems: IItem[];
  };
}

export interface IStateCartReducer {
  hidden: boolean;
  cartItems: IItem[];
}

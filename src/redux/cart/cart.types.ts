import { IItem } from '../../components/collection-preview/collection-preview';

export interface ICartAction {
  type: string;
  payload?: IItem;
}

export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
  ADD_ITEM = 'ADD_ITEM',
}

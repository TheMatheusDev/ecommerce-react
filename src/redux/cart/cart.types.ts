import { IItem } from '../../interfaces';

export interface ICartAction {
  type: string;
  payload?: IItem;
}

export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_ITEM = 'CLEAR_ITEM',
}

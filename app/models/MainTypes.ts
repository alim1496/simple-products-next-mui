import { Dispatch } from "react";
import { Product } from "./Product";

export interface State {
  products: Product[];
  displayProducts: Product[];
  loading: boolean;
  categories: string[];
}

export type Action =
  | { type: "FETCH_PRODUCTS"; payload: Product[] }
  | { type: "EMPTY_PRODUCTS" }
  | { type: "UPDATE_CATEGORIES"; payload: string[] }
  | { type: "UPDATE_BY_CATEGORY"; payload: string }
  | { type: "SORT_PRODUCTS"; payload: string }
  | { type: "FILTER_PRODUCTS"; payload: string }
  | { type: "FILTER_PRICE"; payload: number[] }
  | { type: "UPDATE_LOADING"; payload: boolean };

export interface MainContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

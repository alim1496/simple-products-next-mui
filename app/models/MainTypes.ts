import { Dispatch } from "react";
import { Product } from "./Product";

export interface State {
  products: Product[];
  displayProducts: Product[];
  loading: boolean;
  categories: string[];
  filters: FilterState;
}

export type Action =
  | { type: "FETCH_PRODUCTS"; payload: Product[] }
  | { type: "EMPTY_PRODUCTS" }
  | { type: "UPDATE_CATEGORIES"; payload: string[] }
  | { type: "FILTER_CATEGORY"; payload: string }
  | { type: "FILTER_SEARCH"; payload: string }
  | { type: "FILTER_PRICE"; payload: number[] }
  | { type: "SORT_PRICE"; payload: string }
  | { type: "UPDATE_LOADING"; payload: boolean };

export interface MainContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export type FilterState = {
  category: string;
  search: string;
  sort: string;
  priceRange: number[];
};

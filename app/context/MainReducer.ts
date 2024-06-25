import { Action, State } from "../models/MainTypes";

const MainReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        displayProducts: action.payload,
      };
    case "EMPTY_PRODUCTS":
      return {
        ...state,
        displayProducts: [],
      };
    case "UPDATE_LOADING":
      return { ...state, loading: action.payload };
    case "UPDATE_CATEGORIES":
      return { ...state, categories: ["All", ...action.payload] };
    case "UPDATE_BY_CATEGORY":
      if (action.payload === "All") {
        return { ...state, displayProducts: state.products };
      }
      const updatedProducts = state.products.filter(
        ({ category }) => category === action.payload
      );
      return { ...state, displayProducts: updatedProducts };
    case "SORT_PRODUCTS":
      if (action.payload === "def") {
        const sorted = state.displayProducts.sort((a, b) => a.id - b.id);
        return { ...state, displayProducts: sorted };
      }
      if (action.payload === "asc") {
        const sorted = state.displayProducts.sort(
          (a, b) => parseInt(a.price) - parseInt(b.price)
        );
        return { ...state, displayProducts: sorted };
      }
      if (action.payload === "desc") {
        const sorted = state.displayProducts.sort(
          (a, b) => parseInt(b.price) - parseInt(a.price)
        );
        return { ...state, displayProducts: sorted };
      }
    case "FILTER_PRODUCTS":
      if (action.payload === "") {
        return { ...state, displayProducts: state.products };
      }
      const filtered = state.displayProducts.filter(({ title }) =>
        title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, displayProducts: filtered };
    case "FILTER_PRICE":
      const filteredPrice = state.products.filter(
        ({ price }) =>
          parseInt(price) >= action.payload[0] &&
          parseInt(price) <= action.payload[1]
      );
      return { ...state, displayProducts: filteredPrice };
    default:
      return state;
  }
};

export default MainReducer;

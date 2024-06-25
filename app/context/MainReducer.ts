import { Action, FilterState, State } from "../models/MainTypes";
import { Product } from "../models/Product";

const filterProducts = (
  products: Product[],
  filters: FilterState
): Product[] => {
  return products
    .filter((product) =>
      filters.category === "All" || filters.category === ""
        ? product
        : product.category === filters.category
    )
    .filter((product) =>
      filters.search === ""
        ? product
        : product.title.toLowerCase().includes(filters.search.toLowerCase())
    )
    .filter(
      (product) =>
        !filters.priceRange ||
        (parseInt(product.price) >= filters.priceRange[0] &&
          parseInt(product.price) <= filters.priceRange[1])
    )
    .sort((a, b) =>
      filters.sort === "asc"
        ? parseInt(a.price) - parseInt(b.price)
        : parseInt(b.price) - parseInt(a.price)
    );
};
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
    case "FILTER_PRICE":
      const updatedPriceRange = {
        ...state.filters,
        priceRange: action.payload,
      };
      return {
        ...state,
        filters: updatedPriceRange,
        displayProducts: filterProducts(state.products, updatedPriceRange),
      };
    case "FILTER_CATEGORY":
      const updatedCategoryFilter = {
        ...state.filters,
        category: action.payload,
      };
      return {
        ...state,
        filters: updatedCategoryFilter,
        displayProducts: filterProducts(state.products, updatedCategoryFilter),
      };
    case "FILTER_SEARCH":
      const updatedSearchFilter = { ...state.filters, search: action.payload };
      return {
        ...state,
        filters: updatedSearchFilter,
        displayProducts: filterProducts(state.products, updatedSearchFilter),
      };
    case "SORT_PRICE":
      const updatedSortOrder = { ...state.filters, sort: action.payload };
      return {
        ...state,
        filters: updatedSortOrder,
        displayProducts: filterProducts(state.products, updatedSortOrder),
      };
    default:
      return state;
  }
};

export default MainReducer;

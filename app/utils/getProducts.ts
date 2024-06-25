import axios from "axios";
import CONSTANTS from "./constants";
import { Product } from "../models/Product";
import { ProductResponse } from "../models/ProductResponse";

const getProducts = async () => {
  try {
    const response = await axios.get<Product[]>(CONSTANTS.URL);
    return { products: response.data };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { error };
  }
};

export default getProducts;

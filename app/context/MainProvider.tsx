"use client";
import { FC, ReactNode, useReducer, Reducer, useEffect } from "react";
import MainContext from "./MainContext";
import { Product } from "../models/Product";
import CONSTANTS from "../utils/constants";
import MainReducer from "./MainReducer";
import { Action, State } from "../models/MainTypes";
import axios from "axios";

const MainContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const initialState = {
    products: [],
    displayProducts: [],
    loading: false,
    categories: [],
  };

  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    MainReducer,
    initialState
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "UPDATE_LOADING", payload: true });
      try {
        const response = await axios.get<Product[]>(CONSTANTS.URL);
        const { data } = response;
        dispatch({ type: "FETCH_PRODUCTS", payload: data });
        const categoryList = data?.map((datum) => datum.category);
        dispatch({
          type: "UPDATE_CATEGORIES",
          payload: [...new Set(categoryList)],
        });
      } catch (error) {
        // setError(error as Error);
      } finally {
        dispatch({ type: "UPDATE_LOADING", payload: false });
      }
    };

    fetchData();
  }, []);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;

import { FC, ReactNode, createContext } from "react";
import { MainContextProps } from "../models/MainTypes";

const MainContext = createContext<MainContextProps | undefined>(undefined);

export default MainContext;

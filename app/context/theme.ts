"use client";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import CONSTANTS from "../utils/constants";
import { MyPaletteOptions } from "../models/MyPaletteOptions";

const palette: MyPaletteOptions = {
  primary: {
    main: CONSTANTS.PRIMARY_COLOR,
  },
  secondary: {
    main: CONSTANTS.SECONDARY_COLOR,
  },
  tertiary: {
    main: CONSTANTS.TERTIARY_COLOR,
  },
};

const theme = createTheme({
  palette,
}) as ThemeOptions;

export default theme;

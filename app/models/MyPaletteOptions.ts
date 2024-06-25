import { PaletteOptions, PaletteColorOptions } from "@mui/material/styles";

export interface MyPaletteOptions extends PaletteOptions {
  tertiary?: PaletteColorOptions;
}

import React, { useState, FC, useContext } from "react";
import { TextField, Grid, IconButton, InputAdornment } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import MainContext from "../context/MainContext";
import { MainContextProps } from "../models/MainTypes";

const SearchBox: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { dispatch } = useContext(MainContext) as MainContextProps;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    dispatch({ type: "FILTER_PRODUCTS", payload: event.target.value });
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <Grid item xs={12} sm={4} md={2} sx={{ my: 2 }}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={clearSearch}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default SearchBox;

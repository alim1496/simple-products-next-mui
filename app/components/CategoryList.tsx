import { FC, useContext, useState } from "react";
import {
  SelectChangeEvent,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import MainContext from "../context/MainContext";
import { MainContextProps } from "../models/MainTypes";

const CategoryList: FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("");
  const {
    dispatch,
    state: { categories },
  } = useContext(MainContext) as MainContextProps;

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selected = event.target.value as string;
    setSelectedItem(selected);
    dispatch({ type: "FILTER_CATEGORY", payload: selected });
  };

  return (
    <Grid item xs={12} sm={4} md={2} sx={{ my: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="unique-select-label">Select Category</InputLabel>
        <Select
          labelId="unique-select-label"
          value={selectedItem}
          onChange={handleChange}
          label="Select Category"
        >
          {categories?.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default CategoryList;

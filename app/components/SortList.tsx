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
import { SortProps } from "../models/SortProps";

const SortList: FC<{ sortItems: SortProps[] }> = ({ sortItems }) => {
  const [selectedItem, setSelectedItem] = useState<string>("");
  const { dispatch } = useContext(MainContext) as MainContextProps;

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selected = event.target.value as string;
    setSelectedItem(selected);
    dispatch({ type: "SORT_PRODUCTS", payload: selected });
  };

  return (
    <Grid item xs={12} sm={4} md={2} sx={{ my: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="unique-select-label">Sort By</InputLabel>
        <Select
          labelId="unique-sort-label"
          value={selectedItem}
          onChange={handleChange}
          label="Sort By"
        >
          {sortItems?.map((item) => (
            <MenuItem key={item.sortValue} value={item.sortValue}>
              {item.sortLabel}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SortList;

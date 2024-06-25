import { FC } from "react";
import { Grid } from "@mui/material";
import CategoryList from "./CategoryList";
import SortList from "./SortList";
import CONSTANTS from "../utils/constants";
import SearchBox from "./SearchBox";
import PriceRangeSlider from "./PriceRangeSlider";

const TopBar: FC = () => {
  return (
    <Grid container spacing={2}>
      <CategoryList />
      <SortList sortItems={CONSTANTS.SORT_OPTIONS} />
      <SearchBox />
      <PriceRangeSlider min={0} max={1000} />
    </Grid>
  );
};

export default TopBar;

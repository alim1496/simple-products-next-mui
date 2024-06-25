import { FC, useContext, useState } from "react";
import { Slider, Grid, Typography, Box } from "@mui/material";
import MainContext from "../context/MainContext";
import { MainContextProps } from "../models/MainTypes";

const PriceRangeSlider: FC<{ min: number; max: number }> = ({ min, max }) => {
  const [value, setValue] = useState([min, max]);
  const { dispatch } = useContext(MainContext) as MainContextProps;

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    dispatch({ type: "FILTER_PRICE", payload: newValue as number[] });
  };

  return (
    <Grid item xs={12} sm={4} md={2} sx={{ my: 2 }}>
      <Box sx={{ width: 300 }}>
        <Typography id="range-slider" gutterBottom>
          Price Range
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>${min}</Typography>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={min}
            max={max}
            aria-labelledby="range-slider"
            sx={{ width: "80%", marginX: "10px" }}
          />
          <Typography>${max}</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default PriceRangeSlider;

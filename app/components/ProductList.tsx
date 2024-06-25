"use client";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import { FC } from "react";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import { Product } from "../models/Product";

const ProductList: FC<{ products?: Product[] }> = ({ products }) => {
  return (
    <Grid container spacing={3}>
      {products?.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              height="200"
              sx={{ padding: "1em", objectFit: "contain" }}
            />
            <CardContent
              sx={{ padding: "1em", backgroundColor: "#F2F2F2" }}
              className="custom-card-content"
            >
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  cursor: "default",
                  fontWeight: 700,
                }}
                title={product.title}
                color="secondary"
              >
                {product.title}
              </Typography>
              <Typography variant="caption" color="secondary">
                {product.category}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  opacity: 0.85,
                }}
              >
                <StarIcon sx={{ color: "#FACA51", fontSize: 18 }} />
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: "0.1em" }}
                >
                  {product.rating.rate}/5
                </Typography>
                <Typography
                  variant="body2"
                  component="span"
                  sx={{ marginLeft: "0.1em" }}
                >
                  ({product.rating.count})
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ fontWeight: 700 }}
                >
                  ${product.price}
                </Typography>
                <Tooltip title={product.description} placement="top">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;

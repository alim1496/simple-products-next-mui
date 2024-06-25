"use client";
import styles from "./page.module.css";
import { CircularProgress, Container, Box, Pagination } from "@mui/material";
import ProductList from "./components/ProductList";
import { ChangeEvent, useContext, useState } from "react";
import MainContext from "./context/MainContext";
import { MainContextProps } from "./models/MainTypes";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";

export default function Home() {
  const {
    state: { loading, displayProducts },
  } = useContext(MainContext) as MainContextProps;

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;
  const currentProducts = displayProducts.slice(startIndex, endIndex);

  return (
    <main className={styles.main}>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{ minHeight: "93vh", display: "flex", flexDirection: "column" }}
      >
        <TopBar />
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <ProductList products={currentProducts} />
        )}
        <Box
          sx={{ mt: "auto", py: 4, display: "flex", justifyContent: "center" }}
        >
          <Pagination
            count={Math.ceil(displayProducts.length / 8)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Container>
    </main>
  );
}

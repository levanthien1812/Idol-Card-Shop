import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { products, categories } from "../../sample-data";
import { ProductCard } from "./components/ProductCard";

function Products() {
  return (
    <Stack alignItems={"center"}>
      <Stack
        marginTop={10}
        width={"60%"}
        alignItems={"center"}
        style={{
          backgroundImage:
            'url("https://www.toptal.com/designers/subtlepatterns/uploads/leaves.png")',
          backgroundColor: "#ffffff55",
        }}
      >
        <Typography fontSize={30}>Quạt đeo cổ các màu</Typography>
        <Grid container marginTop={3} rowSpacing={3} columnSpacing={2}>
          {products.map((product) => (
            <Grid item xs={6} textAlign={"center"} key={Math.random()}>
              <Stack alignItems={"center"}>
                <ProductCard product={product} />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}

export default Products;

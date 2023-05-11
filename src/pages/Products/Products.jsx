import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { products, categories } from "../../sample-data";
import { ProductCard } from "./components/ProductCard";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category");
  const [chosenCategory, setChosenCategory] = useState(category);

  const productList = products.filter(
    (product) => product.category === category
  );

  console.log(productList);

  const categoryChangeHandler = (event) => {
    setChosenCategory(event.target.value);
    navigate(`/products/?category=${event.target.value}`);
  };

  return (
    <Container>
      <Stack marginTop={10}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={chosenCategory}
            label="Category"
            onChange={categoryChangeHandler}
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Grid container marginTop={3} rowSpacing={3} columnSpacing={2}>
          {productList.map((product) => (
            <Grid item xs={4}>
              <ProductCard product={product}/>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

export default Products;

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { products, categories } from "../../sample-data";

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

  const productChooseHandler = (id) => {
    navigate(`/products/${id}`);
  };

  return (
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
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => productChooseHandler(product.id)}>
                <CardMedia
                  component="img"
                  height="240"
                  image={product.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={20}
                  >
                    {product.price + " VNĐ"}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default Products;

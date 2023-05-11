import {
  Alert,
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  Container,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductDetail, getRelatedProducts } from "../../services";
import {
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import RelatedProducts from "./components/RelatedProducts";

function DetailProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(localStorage.getItem("user") !== null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  
  const { id } = params;
  const product = getProductDetail(id);
  const relatedProducts = getRelatedProducts(id)

  const incrementHandler = () => {
    if (quantity > product.quantity) {
      return setError(
        "Không đủ hàng để bán! Vui lòng chọn số lượng mua phù hợp"
      );
    }
    setQuantity((prev) => prev + 1);
    setError(null)
  };

  const decrementHandler = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const buyClickHandler = () => {
    if (!isAuth) {
      return setError("Bạn chưa đăng nhập, vui lòng đăng nhập để thực hiện");
    }
    // handle when user is logged in
    navigate("/products/:id/order");
  };

  return (
    <Container>
      <Stack marginTop={14}>
        {error && (
          <Alert
            severity="error"
            onClose={() => {
              setError(null);
            }}
          >
            {error}
          </Alert>
        )}
        <Stack marginTop={2} direction="row" spacing={3}>
          <Stack>
            <Box width="500px" height="500px">
              <img
                width="100%"
                height="100%"
                src={product.image}
                alt={product.name}
              />
            </Box>
          </Stack>
          <Stack padding={3}>
            <Typography variant="h2">{product.name}</Typography>
            <Typography variant="p" fontSize={20}>
              Giá: {product.price} VNĐ
            </Typography>
            <Divider sx={{ marginTop: "20px" }} />
            <Typography variant="p" marginTop={2}>
              Số lượng hàng còn: {product.quantity}
            </Typography>
            <Typography variant="p" marginTop={2}>
              Mô tả: {product.description}
            </Typography>
            <Stack direction="row" marginTop={2} alignItems="center">
              <Typography>Chọn số lượng mua: </Typography>
              <Stack direction="row" marginLeft={2}>
                <IconButton onClick={decrementHandler}>
                  <ChevronLeft />
                </IconButton>
                <TextField
                  style={{ marginLeft: "8px" }}
                  size="small"
                  inputProps={{
                    style: { textAlign: "center", width: "50px" },
                    readOnly: true,
                  }}
                  value={quantity}
                />
                <IconButton style={{ marginLeft: "8px" }} onClick={incrementHandler}>
                  <ChevronRight />
                </IconButton>
              </Stack>
            </Stack>
            <Button
              variant="contained"
              sx={{ marginTop: "16px" }}
              onClick={buyClickHandler}
            >
              Mua sản phẩm
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <RelatedProducts products={relatedProducts}/>
    </Container>
  );
}

export default DetailProduct;

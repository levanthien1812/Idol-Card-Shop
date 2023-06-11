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
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import RelatedProducts from "./components/RelatedProducts";

function DetailProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(localStorage.getItem("user") !== null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);

  const { id } = params;
  const product = getProductDetail(id);
  const relatedProducts = getRelatedProducts(id);

  const incrementHandler = () => {
    if (quantity + 1 > product.quantity) {
      return setError(
        "Không đủ hàng để bán! Vui lòng chọn số lượng mua phù hợp"
      );
    }
    setQuantity((prev) => prev + 1);
    setError(null);
  };

  const decrementHandler = () => {
    if (quantity > 1) {
      setError(null);
      setQuantity((prev) => prev - 1);
    } else {
      setError("Bạn phải mua tối thiểu 1 sản phẩm");
    }
  };

  const buyClickHandler = () => {
    navigate(`/orders/?product=${product.id}&quantity=${quantity}`);
  };

  return (
    <Stack
      style={{
        backgroundImage:
          'url("https://www.toptal.com/designers/subtlepatterns/uploads/leaves.png")',
        backgroundColor: "#ffffff55",
      }}
      paddingX={20}
    >
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
          <Stack paddingTop={5}>
            <Box width="500px" height="500px" boxShadow={2}>
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
            <Typography style={{ textDecoration: "line-through" }}>
              Gía gốc: {product.oldPrice} VNĐ
            </Typography>
            <Typography variant="p" fontSize={20}>
              Giảm giá còn:{" "}
              <span style={{ fontSize: 24, fontWeight: 600, color: "red" }}>
                {product.price} VNĐ
              </span>
            </Typography>
            <Divider sx={{ marginTop: "20px" }} />
            <Typography variant="p" marginTop={2} fontSize={20}>
              Số lượng hàng còn: {product.quantity}
            </Typography>
            <Typography variant="p" marginTop={2} fontSize={20}>
              Mô tả: {product.description}
            </Typography>
            <Stack direction="row" marginTop={2} alignItems="center">
              <Typography fontSize={20}>Chọn số lượng mua: </Typography>
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
                <IconButton
                  style={{ marginLeft: "8px" }}
                  onClick={incrementHandler}
                >
                  <ChevronRight />
                </IconButton>
              </Stack>
            </Stack>
            <Button
              variant="contained"
              sx={{ marginTop: "16px" }}
              onClick={buyClickHandler}
              style={{
                fontSize: 20,
                marginTop: 40,
                backgroundImage: "linear-gradient(to right, #008DD6, #00C2BD",
              }}
            >
              Mua sản phẩm
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <RelatedProducts products={relatedProducts} />
    </Stack>
  );
}

export default DetailProduct;

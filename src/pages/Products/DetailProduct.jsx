import {
  Alert,
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "../../services";

function DetailProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const product = getProductDetail(id);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("user") !== null);
  const [showAlert, setShowAlert] = useState(false);

  const buyClickHandler = () => {
    if (!isAuth) {
      return setShowAlert(true);
    }
    // handle when user is logged in
    navigate("/products/:id/order");
  };

  return (
    <Container>
      <Stack marginTop={14}>
        {showAlert && (
          <Alert
            severity="error"
            onClose={() => {
              setShowAlert(false);
            }}
          >
            You are not logged in! Please <Link to="/login">login here</Link>
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
    </Container>
  );
}

export default DetailProduct;

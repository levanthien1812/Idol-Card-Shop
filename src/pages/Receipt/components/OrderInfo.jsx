import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";

function OrderInfo({ product, _quantity }) {
  const [quantity, setQuantity] = useState(_quantity);
  const [error, setError] = useState(null);
  const [shippingFee, setShippingFee] = useState(10000);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(quantity * product.price + shippingFee);
  }, [quantity, shippingFee]);

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
  return (
    <Stack
      style={{
        border: "3px solid #c44dff",
        backgroundColor: "#f1edd955",
        height: "fit-content",
      }}
      padding={3}
      borderRadius={3}
      flexGrow={1}
    >
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
        <Star/>
        <Typography variant="h5">Thông tin đơn hàng</Typography>
        <Star/>
      </Stack>
      <Divider style={{marginTop: "16px"}}/>
      <Stack marginTop={3}>
        <Stack direction="row" spacing={3}>
          <Stack
            maxWidth="40%"
            height="160px"
            overflow="hidden"
            alignItems="center"
            justifyContent="center"
            borderRadius={3}
          >
            <img width="100%" src={product.image} />
          </Stack>
          <Stack>
            <Typography> Tên sản phẩm: {product.name}</Typography>
            <Typography marginTop={1}> Đơn giá: {product.price} VNĐ</Typography>

            <Stack direction="row" alignItems="center" marginTop={1}>
              <Typography> Số lượng: </Typography>
              <IconButton onClick={decrementHandler}>
                <ChevronLeft />
              </IconButton>
              <TextField
                style={{ marginLeft: "8px" }}
                size="small"
                inputProps={{
                  style: { textAlign: "center", width: "30px" },
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
        </Stack>
        <Stack direction="row" justifyContent="space-between" marginTop={3}>
          <Typography fontSize={18}>Tổng tiền sản phẩm:</Typography>
          <Typography fontWeight="600" fontSize={20}>
            {product.price * quantity} đ
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" marginTop={1}>
          <Typography fontSize={18}>Phí vận chuyển: </Typography>
          <Typography fontWeight="600" fontSize={20}>
            {shippingFee} đ
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" marginTop={1}>
          <Typography fontSize={18}>Tổng tiền:</Typography>
          <Typography fontWeight="600" fontSize={20}>
            {totalPrice} đ
          </Typography>
        </Stack>
        <Button
          variant="contained"
          style={{
            marginTop: "164px",
            fontSize: "18px",
            backgroundColor: "#c44dff",
          }}
        >
          Đặt hàng
        </Button>
      </Stack>
    </Stack>
  );
}

export default OrderInfo;

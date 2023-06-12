import { Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

function OrderSuccess() {
  const params = useParams();

  const orders = JSON.parse(localStorage.getItem("orders"));
  console.log(orders);

  const order = orders.filter((order) => order.id === parseInt(params.id))[0];
  console.log(order.id, params.id);

  console.log(order);

  return (
    <Stack marginX={20} marginTop={12}>
      <Typography fontSize={30}>Đơn hàng của bạn</Typography>
      <Stack marginTop={3} direction={"row"} spacing={2}>
        <Stack>
          <Stack direction="row" spacing={3}>
            <Stack
              maxWidth="40%"
              height="160px"
              overflow="hidden"
              alignItems="center"
              justifyContent="center"
              borderRadius={3}
            >
              <img width="100%" src={order.product.image} />
            </Stack>
            <Stack>
              <Typography fontSize={20}>
                {" "}
                Tên sản phẩm: Quạt đeo cổ mini
              </Typography>
              <Typography marginTop={1}>
                {" "}
                Đơn giá: {order.product.price} VNĐ
              </Typography>

              <Stack direction="row" alignItems="center" marginTop={1}>
                <Typography> Số lượng: </Typography>
                <TextField
                  style={{ marginLeft: "8px" }}
                  size="small"
                  inputProps={{
                    style: { textAlign: "center", width: "30px" },
                    readOnly: true,
                  }}
                  value={order.quantity}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="space-between" marginTop={3}>
            <Typography fontSize={18}>Tổng tiền sản phẩm:</Typography>
            <Typography fontWeight="600" fontSize={20}>
              {order.product.price * order.quantity} đ
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" marginTop={1}>
            <Typography fontSize={18}>Phí vận chuyển: </Typography>
            <Typography fontWeight="600" fontSize={20}>
              {order.shippingFee} đ
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" marginTop={1}>
            <Typography fontSize={18}>Tổng tiền:</Typography>
            <Typography fontWeight="600" fontSize={20}>
              {order.totalPrice} đ
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default OrderSuccess;

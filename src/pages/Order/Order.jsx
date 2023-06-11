import UserInfo from "../Receipt/components/UserInfo";
import ShippingInfo from "./ShippingInfo";
import PaymentMethodInfo from "./PaymentMethodInfo";
import OrderInfo from "./OrderInfo";
import { Container, Typography, Stack } from "@mui/material";
import { useState } from "react";

function Order() {
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <Container style={{ marginTop: "100px" }}>
      <Typography variant="h3" component="h1" marginBottom={2}>
        Đặt hàng & thanh toán
      </Typography>

      <Stack direction="row" spacing={3}>
        <Stack maxWidth="55%">
          {/* User info */}
          <UserInfo />
          {/* Shipping info */}
          <ShippingInfo />
          {/* Payment method */}
          <PaymentMethodInfo totalPrice={totalPrice} />
        </Stack>
        {/* Order info */}
        <OrderInfo totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
      </Stack>
    </Container>
  );
}

export default Order;

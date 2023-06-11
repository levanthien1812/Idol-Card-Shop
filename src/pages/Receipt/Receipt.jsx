import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserInfo from "./components/UserInfo";
import ShippingInfo from "./components/ShippingInfo";
import PaymentMethodInfo from "./components/PaymentMethodInfo";
import OrderInfo from "./components/OrderInfo";
import { useParams, useSearchParams } from "react-router-dom";
import { getProductDetail } from "../../services";

function Receipt() {
  const params = useParams();
  const { productId } = params;
  const [searchParams, setSearchParams] = useSearchParams();
  const quantity = searchParams.get("quantity");
  const product = getProductDetail(productId);

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
          <PaymentMethodInfo />
        </Stack>
        {/* Order info */}
        <OrderInfo product={product} _quantity={quantity} />
      </Stack>
    </Container>
  );
}

export default Receipt;

import UserInfo from "./UserInfo";
import ShippingInfo from "./ShippingInfo";
import PaymentMethodInfo from "./PaymentMethodInfo";
import OrderInfo from "./OrderInfo";
import { Container, Typography, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getProductDetail } from "../../services";
import { useSelector } from "react-redux";

function Order() {
  const [searchParams, setSearchParams] = useSearchParams();
  const quantity = searchParams.get("quantity");
  const productId = searchParams.get("product");
  const product = getProductDetail(productId);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("transfer");
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const orderHandler = () => {
    const orderInfo = {
      userInfo,
      shippingInfo,
      paymentMethod,
      product,
      totalPrice,
    };

    const newId = Math.round(Math.random() * 1000);
    const orders = localStorage.getItem("orders");
    if (!orders) {
      localStorage.setItem(
        "orders",
        JSON.stringify([{ ...orderInfo, id: newId }])
      );
    } else {
      localStorage.setItem(
        "orders",
        JSON.stringify([...orders, { ...orderInfo, id: newId }])
      );
    }
    navigate("/order-list/" + newId);
  };

  return (
    <Container style={{ marginTop: "100px" }}>
      <Typography variant="h3" component="h1" marginBottom={2}>
        Đặt hàng & thanh toán
      </Typography>

      <Stack direction="row" spacing={3}>
        <Stack maxWidth="55%">
          {/* User info */}
          <UserInfo user={user} setUserInfo={setUserInfo} />
          {/* Shipping info */}
          <ShippingInfo setShippingInfo={setShippingInfo} />
          {/* Payment method */}
          <PaymentMethodInfo
            totalPrice={totalPrice}
            paymentMethod={paymentMethod}
            setPaymentChosen={setPaymentMethod}
          />
        </Stack>
        {/* Order info */}
        <OrderInfo
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          product={product}
          _quantity={quantity}
          onOrder={orderHandler}
        />
      </Stack>
    </Container>
  );
}

export default Order;

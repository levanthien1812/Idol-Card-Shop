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
  const [quantity, setQuantity] = searchParams.get("quantity");
  const productId = searchParams.get("product");
  const product = getProductDetail(productId);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("transfer");
  const [shippingFee, setShippingFee] = useState(10000);

  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const orderHandler = () => {
    const orderInfo = {
      userInfo,
      shippingInfo,
      paymentMethod,
      product,
      quantity,
      totalPrice,
      shippingFee,
    };

    const newId = Math.round(Math.random() * 1000);
    localStorage.setItem("order", JSON.stringify({ ...orderInfo, id: newId }));
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
          quantity={quantity}
          setQuantity={setQuantity}
          onOrder={orderHandler}
          shippingFee={shippingFee}
        />
      </Stack>
    </Container>
  );
}

export default Order;

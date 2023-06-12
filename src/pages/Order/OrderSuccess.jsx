import { Icon, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDistricts, getProvinces, getWards } from "../../services";
import { Star } from "@mui/icons-material";

function OrderSuccess() {
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);

  const order = JSON.parse(localStorage.getItem("order"));

  useEffect(() => {
    async function fetchProvinces() {
      const provinces = await getProvinces();
      const _province = provinces.find(
        (p) => (p.province_id = order.shippingInfo.province)
      );
      setProvince(_province.province_name);
    }
    async function fetchDistricts() {
      const districts = await getDistricts(order.shippingInfo.province);
      const _district = districts.find(
        (p) => (p.district_id = order.shippingInfo.district)
      );
      setDistrict(_district.district_name);
    }
    async function fetchWards() {
      const wards = await getWards(order.shippingInfo.district);
      const _ward = wards.find((p) => (p.ward_id = order.shippingInfo.ward));
      setWard(_ward.ward_name);
    }
    fetchProvinces();
    fetchDistricts();
    fetchWards();
  }, []);

  return (
    <Stack
      marginX={30}
      marginTop={12}
      paddingY={3}
      alignItems={"center"}
      style={{ backgroundColor: "#002233" }}
      borderRadius={3}
    >
      <Typography color={"white"} fontSize={30}>
        Đơn hàng của bạn
      </Typography>
      <Stack marginTop={3} direction={"row"} spacing={2}>
        <Stack>
          <Stack direction="row" spacing={3}>
            <Stack
              maxWidth="40%"
              height="180px"
              overflow="hidden"
              alignItems="center"
              justifyContent="center"
              borderRadius={3}
            >
              <img width="100%" src={order.product.image} height={"200px"} />
            </Stack>
            <Stack>
              <Typography color={"white"} fontSize={20}>
                {" "}
                Tên sản phẩm: Quạt đeo cổ mini
              </Typography>
              <Typography color={"white"} marginTop={1}>
                {" "}
                Đơn giá: {order.product.price} VNĐ
              </Typography>

              <Stack direction="row" alignItems="center" marginTop={1}>
                <Typography color={"white"}> Số lượng</Typography>
                <TextField
                  style={{ marginLeft: "8px" }}
                  size="small"
                  inputProps={{
                    style: {
                      textAlign: "center",
                      width: "30px",
                      color: "white",
                    },
                    readOnly: true,
                  }}
                  value={order.quantity}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="space-between" marginTop={3}>
            <Typography color={"white"} fontSize={18}>
              Tổng tiền sản phẩm:
            </Typography>
            <Typography color={"white"} fontWeight="600" fontSize={20}>
              {order.product.price * order.quantity} đ
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" marginTop={1}>
            <Typography color={"white"} fontSize={18}>
              Phí vận chuyển:{" "}
            </Typography>
            <Typography color={"white"} fontWeight="600" fontSize={20}>
              {order.shippingFee}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between" marginTop={1}>
            <Typography color={"white"} fontSize={18}>
              Tổng tiền:
            </Typography>
            <Typography color={"white"} fontWeight="600" fontSize={20}>
              {order.totalPrice} đ
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack marginTop={2}>
        <Typography color={"white"}>
          <Star color="white" style={{ marginRight: 8 }}></Star>
          {order.paymentMethod === "transfer"
            ? "Thanh toán bằng hình thức chuyển khoản"
            : "Thanh toán khi nhận hàng"}
        </Typography>
        <Stack>
          <Typography color={"white"}>
            {" "}
            <Star color="white" style={{ marginRight: 8 }}></Star>
            Số điện thoại người nhận: <span>{order.shippingInfo.phone}</span>
          </Typography>
          <Typography color={"white"}>
            <Star color="white" style={{ marginRight: 8 }}></Star>
            Địa chỉ nhận hàng:{" "}
            <span>{ward + ", " + district + ", " + province}</span>
          </Typography>
          <Typography color={"white"}>
            <Star color="white" style={{ marginRight: 8 }}></Star>
            Thời gian giao hàng: từ 2 - 5 ngày
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default OrderSuccess;

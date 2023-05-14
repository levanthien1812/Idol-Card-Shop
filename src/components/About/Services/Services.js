import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import "./Services.css";
import { Link } from "react-router-dom";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};
const number = {
  fontSize: 24,
  fontFamily: "inherit",
  color: "#fe005a",
  fontWeight: "bold",
};

const image = {
  height: 55,
  my: 4,
};

function Services() {
  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          marginTop: "3em",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component={"img"}
          src={require("../../../assets/images/background.png")}
          alt="background"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            opacity: 0.5,
            height: "100%",
            width: "100%",
          }}
        />
        <Typography
          variant="h3"
          className="servicesHeader"
          textAlign={"center"}
          component={"h2"}
          sx={{ mb: 10, mt: 8, fontFamily: "'Braah One', sans-serif" }}
        >
          Các dịch vụ của cửa hàng
        </Typography>
        <div>
          <Grid container spacing={5} mb={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1. Dịch vụ tư vấn</Box>
                <Box
                  component={"img"}
                  src={require("../../../assets/images/customer_service.png")}
                  alt="customer service"
                  sx={image}
                />
                <Typography variant="h6" align="justify">
                  Tư vấn khách hàng trong quy trình đặt/đổi/hoàn/hủy đơn hàng.
                  <br />
                  Nhận đặt hàng các vật phẩm không có sẵn trên shop theo yêu cầu
                  của khách hàng.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2. Dịch vụ đóng gói</Box>
                <Box
                  component={"img"}
                  src={require("../../../assets/images/packing.png")}
                  alt="customer service"
                  sx={image}
                />
                <Typography variant="h6" align="justify">
                  Cam kết sản phẩm được đóng gói cẩn thận, chắc chắn; tránh bụi
                  bẩn, mưa, độ ẩm, nắng nóng và những va chạm có thể gây hư hại
                  sản phẩm.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3. Dịch vụ vận chuyển</Box>
                <Box
                  component={"img"}
                  src={require("../../../assets/images/Delivery.png")}
                  alt="customer service"
                  sx={image}
                />
                <Typography variant="h6" align="justify">
                  Đảm bảo đơn hàng giao đúng địa chỉ trong đúng thời gian dự
                  kiến hiển thị trên app. <br />
                  Đảm bảo trạng thái, vị trí đơn hàng được cập nhật liên tục,
                  đầy đủ trên tài khoản khách hàng trong quá trình vận chuyển.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={5}
            mb={5}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
          >
            <Grid item xs={12} md={5}>
              <Box sx={item}>
                <Box sx={number}>4. Dịch vụ hoàn trả hàng</Box>
                <Box
                  component={"img"}
                  src={require("../../../assets/images/return_purchase.png")}
                  alt="customer service"
                  sx={image}
                />
                <Typography variant="h6" align="justify">
                  Điều kiện trả hàng: giao sai sản phẩm, không đúng mẫu mã, kích
                  thước, chất liệu như mô tả, sản phẩm bị hư hại do vận chuyển.
                  <br />
                  Phương thức hoàn tiền: Khách hàng có thể nhận lại tiền qua
                  ngân hàng, nhận voucher giá trị tương đương hoặc nhận lại sản
                  phẩm đúng.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={item}>
                <Box sx={number}>5. Dịch vụ khuyến mãi</Box>
                <Box
                  component={"img"}
                  src={require("../../../assets/images/sale.png")}
                  alt="customer service"
                  sx={image}
                />
                <Typography variant="h6" align="justify">
                  Vào các ngày giảm giá của shopee (ngày đôi, giữa tháng, cuối
                  tháng), shop sẽ cung cấp một số voucher giảm giá tùy vào giá
                  trị đơn hàng và voucher freeship với số lượng nhất định.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Link to="/signup">
          <Button
            variant="contained"
            className="getStartedBtn"
            sx={{
              mb: 8,
              backgroundColor: "#ff0062",
              fontWeight: "700",
              fontSize: "large",
              px: 4,
              py: 1.5,
              fontFamily: "inherit",
              "&:hover": {
                color: "white !important",
              },
            }}
          >
            Bắt đầu
          </Button>
        </Link>
      </div>
    </Box>
  );
}

export default Services;

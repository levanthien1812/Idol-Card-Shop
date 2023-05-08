import React from "react";
import { Box, Grid, Container, Button, Typography } from "@mui/material";
import "./Services.css";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};
const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
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
          marginBottom: "3em",
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
          variant="h4"
          textAlign={"center"}
          component={"h2"}
          sx={{ mb: 10, mt: 8 }}
        >
          Các dịch vụ của cửa hàng
        </Typography>
        <div>
          <Grid container spacing={5} mb={10}>
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
                  src={require("../../../assets/images/customer_service.png")}
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
                  src={require("../../../assets/images/customer_service.png")}
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
            mb={10}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
          >
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>4. Dịch vụ hoàn trả hàng</Box>
                <Box
                  component={"img"}
                  src={require("../../../assets/images/customer_service.png")}
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
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>5. Dịch vụ khuyến mãi</Box>
                <Box
                  component={"img"}
                  src={require("../../../assets/images/customer_service.png")}
                  alt="customer service"
                  sx={image}
                />
                <Typography variant="h6" align="justify">
                  Vào các ngày giảm giá của shopee (ngày đôi, giữa tháng, cuối
                  tháng), shop sẽ cung cấp một số voucher giảm giá như giảm 10%,
                  20%, 50%, 15k, 50k, 100k tùy vào giá trị đơn hàng và voucher
                  freeship với số lượng nhất định.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </Box>
  );
}

export default Services;
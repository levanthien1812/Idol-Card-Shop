import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
import "./Services.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const isAuthed = useSelector((state) => state.auth.isAuthed);

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
          Mô tả sản phẩm
        </Typography>
        <div>
          <Grid container spacing={5} mb={7} px={3}>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                <Box sx={number}>Tạo cảm giác mát mẻ</Box>
                <Box
                  component={"img"}
                  src={require("../../../assets/images/breeze.png")}
                  alt="customer service"
                  sx={image}
                />
                <Typography variant="h6" align="justify">
                  Sản phẩm tạo luồng gió mát nhẹ nhàng, giúp giảm cảm giác khó
                  chịu trong những ngày nóng. Người dùng có thể điều chỉnh tốc
                  độ gió và góc hướng để đạt được sự thoải mái tối ưu.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                <Box sx={number}>Tiện ích di động</Box>
                <Box
                  component={"img"}
                  src={require("../../../assets/images/outdoor.png")}
                  alt="customer service"
                  sx={image}
                />
                <Typography variant="h6" align="justify">
                  Quạt đeo cổ mini cho phép người dùng mang theo sản phẩm và sử
                  dụng mọi lúc, mọi nơi. Điều này rất hữu ích trong các hoạt
                  động ngoài trời, thể thao, du lịch hoặc làm việc trong môi
                  trường nóng.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                <Box sx={number}>Sự thoải mái cá nhân</Box>
                <Box
                  component={"img"}
                  src={require("../../../assets/images/personal.png")}
                  alt="customer service"
                  sx={image}
                />
                <Typography variant="h6" align="justify">
                  Quạt đeo cổ mini cung cấp sự mát mẻ trực tiếp cho vùng cổ và
                  khu vực xung quanh. Điều này giúp người dùng cảm thấy thoải
                  mái và tăng cường hiệu suất làm việc trong môi trường nhiệt
                  đới hoặc khi hoạt động vận động.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                <Box sx={number}>Thiết kế tiện lợi</Box>
                <Box
                  component={"img"}
                  src={require("../../../assets/images/flexible.png")}
                  alt="customer service"
                  sx={image}
                />
                <Typography variant="h6" align="justify">
                  Với thiết kế nhẹ nhàng và có thể điều chỉnh, quạt đeo cổ mini
                  dễ dàng điều chỉnh phù hợp với mọi người dùng. Nó cũng được
                  trang bị pin hoặc sạc tích hợp, giúp tiết kiệm thời gian và
                  tiền bạc cho việc thay pin thường xuyên.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Link to={isAuthed ? "/order" : "/signup"}>
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
            Mua ngay
          </Button>
        </Link>
      </div>
    </Box>
  );
}

export default Services;

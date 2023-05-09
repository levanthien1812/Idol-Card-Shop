import React from "react";
import { Button, Typography } from "@mui/material";
import GetStartedLayout from "./GetStartedLayout";
import "./GetStarted.css";

const backgroundImage = require("../../../assets/images/about_background.png");

function GetStarted() {
  return (
    <GetStartedLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography
        color={"inherit"}
        align="center"
        variant="h2"
        fontFamily={"'Braah One', sans-serif"}
        mt={12}
        className="gsHeader"
      >
        IDOL CARD SHOP
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h6"
        sx={{ mb: 8, mt: 10 }}
        className="gsText"
      >
        Dòng sản phẩm Idol Card Shop cung cấp chính là các vật phẩm kỷ niệm liên
        quan đến các thần tượng Hàn Quốc, được dùng cho mục đích sưu tầm, trang
        trí hoặc cho mục đích thời trang.
      </Typography>
      <Button
        className="gsSignUpBtn"
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/signup"
        sx={{
          minWidth: 130,
          minHeight: 50,
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
        Đăng kí
      </Button>
    </GetStartedLayout>
  );
}

export default GetStarted;

import React from "react";
import { Button, Typography } from "@mui/material";
import GetStartedLayout from "./GetStartedLayout";
import "./GetStarted.css";
import { Link } from "react-router-dom";

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
        CoolBreeze Solutions
      </Typography>
      <hr style={{ color: "white", width: "20%", height: "1px" }} />
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 2, mt: 2 }}
        className="gsText"
      >
        Giải pháp không khí nguyên thuỷ tuyệt đối
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h6"
        sx={{ mb: 5, mt: 5 }}
        className="gsText"
      >
        Quạt đeo cổ mini là một sản phẩm công nghệ nhỏ gọn, có thiết kế thông
        minh giúp người dùng mang theo và đeo trên cổ một cách dễ dàng. Với chức
        năng tạo luồng gió mát, sản phẩm này là giải pháp lý tưởng cho việc làm
        mát cá nhân và mang lại sự thoải mái trong những môi trường nóng bức.
      </Typography>
      <Link to={"/signup"}>
        <Button
          className="gsSignUpBtn"
          color="secondary"
          variant="contained"
          size="large"
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
      </Link>
    </GetStartedLayout>
  );
}

export default GetStarted;

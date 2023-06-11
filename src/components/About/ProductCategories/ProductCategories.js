import React from "react";
import Box from "@mui/material/Box";
import { ButtonBase } from "@mui/material";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "./ProductCategories.css";

const ImageBackdrop = styled("div")(() => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: "1.5s",
}));

const ImageIconButton = styled(ButtonBase)(() => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    backgroundColor: "white",
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: "1.5s",
  },
}));

const images = [
  {
    url: "https://res.cloudinary.com/dvmxvwqev/image/upload/v1686458411/product_mvjdkn.jpg",
    title: "Quạt đeo cổ mini",
    width: "55%",
    height: "33em",
    link: "/products/?category=album",
  },
  {
    url: "https://res.cloudinary.com/dvmxvwqev/image/upload/v1686458411/product2_d031pk.jpg",
    title: "Công dụng",
    width: "45%",
    height: "33em",
    link: "/",
  },
];

function ProductCategories() {
  const navigate = useNavigate();

  const imageClickHandler = (link) => {
    navigate(link);
  };

  return (
    <Container sx={{ mt: "3em" }}>
      <Typography
        className="pcHeader"
        variant="h4"
        color={"#777172"}
        align="center"
        component="h2"
        fontFamily={"'Braah One', sans-serif"}
      >
        Sản phẩm của cửa hàng
      </Typography>
      <Box
        className="productCategories"
        sx={{ mt: 4, display: "flex", flexWrap: "wrap" }}
      >
        {images.map((item) => (
          <ImageIconButton
            className="imageIconBtn"
            key={item.title}
            style={{ width: item.width, height: item.height }}
            onClick={() => {
              imageClickHandler(item.link);
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${item.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <Typography
                component={"h3"}
                variant="h6"
                color={"inherit"}
                className="imageTitle"
              >
                {item.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}

export default ProductCategories;

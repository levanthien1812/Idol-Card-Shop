import React from "react";
import Box from "@mui/material/Box";
import { ButtonBase } from "@mui/material";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

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
    url: "https://images-na.ssl-images-amazon.com/images/I/61dMr8RTFvL._SL1469_.jpg",
    title: "Album",
    width: "40%",
    height: "33em",
  },
  {
    url: "https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400",
    title: "Card",
    width: "38%",
    height: "33em",
  },
  {
    url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400",
    title: "Bưu thiếp",
    width: "22%",
    height: "33em",
  },
  {
    url: "https://images-na.ssl-images-amazon.com/images/I/61dMr8RTFvL._SL1469_.jpg",
    title: "Móc khóa",
    width: "25%",
    height: "33em",
  },
  {
    url: "https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400",
    title: "Poster",
    width: "40%",
    height: "33em",
  },
  {
    url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400",
    title: "Dây đeo",
    width: "35%",
    height: "33em",
  },
];

function ProductCategories() {
  return (
    <Container sx={{ mt: "30em" }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Những sản phẩm chủ yếu
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((item) => (
          <ImageIconButton
            key={item.title}
            style={{ width: item.width, height: item.height }}
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

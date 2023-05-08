import React from "react";
import Box from "@mui/material/Box";
import { ButtonBase } from "@mui/material";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

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
    link: "/products/?category=album",
  },
  {
    url: "https://d3tvwjfge35btc.cloudfront.net/Assets/GalleryImage/47/332/L_g0146433247.jpg",
    title: "Photocard",
    width: "28%",
    height: "33em",
    link: "/products/?category=photocard",
  },
  {
    url: "https://i.etsystatic.com/35874120/r/il/9cb84e/4184343289/il_794xN.4184343289_dztf.jpg",
    title: "Dây đeo",
    width: "32%",
    height: "33em",
    link: "/products/?category=day-deo",
  },
  {
    url: "https://ae01.alicdn.com/kf/S49cc412ef88f4e898c9ac5702104f619e/Kawaii-Kpop-Bt211-MANG-SHOOKY-RJ-Keychain-Anime-COOKY-KOYA-CHIMMY-Cartoon-Acrylic-Key-Ring-Cute.jpg_640x640.jpg",
    title: "Móc khóa",
    width: "25%",
    height: "33em",
    link: "/products/?category=moc-khoa",
  },
  {
    url: "https://qph.cf2.quoracdn.net/main-qimg-1549f42781dac6a380d8870203566880",
    title: "Poster",
    width: "30%",
    height: "33em",
    link: "/products/?category=poster",
  },

  {
    url: "https://www.sanity.com.au/media/Images/fullimage/816638/SDC_2758297_2023-24-3--16-04-27.jpg",
    title: "Lightstick",
    width: "45%",
    height: "33em",
    link: "/products/?category=lightstick",
  },
];

function ProductCategories() {
  const navigate = useNavigate();

  const imageClickHandler = (link) => {
    navigate(link);
  };

  return (
    <Container sx={{ mt: "7em" }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Những sản phẩm chủ yếu
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((item) => (
          <ImageIconButton
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

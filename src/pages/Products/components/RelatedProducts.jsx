import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { ProductCard } from "./ProductCard";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function RelatedProducts({ products }) {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <Stack marginBottom={4} marginTop={10}>
      <Typography
        variant="p"
        textTransform="uppercase"
        fontSize={30}
        marginBottom={3}
        textAlign="center"
      >
        Sản phẩm tương tự
      </Typography>
      <Stack
        marginX={10}
        position="relative"
        direction="row"
        alignItems="center"
      >
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            prevEl: ".prevBtn",
            nextEl: ".nextBtn",
          }}
          modules={[FreeMode, Navigation]}
          style={{
            padding: "4px",
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton
          className="prevBtn"
          sx={{
            position: "absolute",
            zIndex: "100",
            left: "-60px",
            padding: 0,
          }}
        >
          <ChevronLeft
            sx={{
              fontSize: "50px",
            }}
          />
        </IconButton>
        <IconButton
          className="nextBtn"
          sx={{
            position: "absolute",
            zIndex: "100",
            right: "-60px",
            padding: 0,
          }}
        >
          <ChevronRight
            sx={{
              fontSize: "50px",
            }}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default RelatedProducts;

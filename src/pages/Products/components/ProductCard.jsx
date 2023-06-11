import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Stack,
  Chip,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const productChooseHandler = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 345, minWidth: 200 }}>
      <CardActionArea onClick={() => productChooseHandler(product.id)}>
        <CardMedia
          component="img"
          height="350"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Stack direction={"row"} justifyContent={"center"} spacing={2}>
            <Typography
              variant="body2"
              color="text.secondary"
              fontSize={20}
              style={{ textDecoration: "line-through" }}
            >
              {product.oldPrice + " VNĐ"}
            </Typography>
            <Typography
              variant="body2"
              color="red"
              fontSize={20}
              fontWeight={"bold"}
            >
              {product.price + " VNĐ"}
            </Typography>
            <Chip
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
              label={
                "-" +
                (
                  ((product.oldPrice - product.price) / product.oldPrice) *
                  100
                ).toFixed() +
                "%"
              }
            ></Chip>
          </Stack>
          <Link to={"/products/" + product.id}>
            <Button
              variant="contained"
              style={{
                marginTop: 8,
                backgroundImage: "linear-gradient(to right, #008DD6, #00C2BD",
              }}
            >
              Xem chi tiết
            </Button>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

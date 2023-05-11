import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
    const navigate = useNavigate()
  const productChooseHandler = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 345, minWidth: 200 }}>
      <CardActionArea onClick={() => productChooseHandler(product.id)}>
        <CardMedia
          component="img"
          height="240"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize={20}>
            {product.price + " VNĐ"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

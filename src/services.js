import { products } from "./sample-data";

export const getProductDetail = (productId) => {
  return products.find((product) => product.id === productId);
};

export const getRelatedProducts = (productId) => {
  const { category } = products.find((product) => product.id === productId);
  return products.filter(
    (product) => product.category === category && product.id !== productId
  );
};

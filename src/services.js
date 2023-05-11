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

export const getProvinces = async () => {
    const response = await fetch("https://vapi.vnappmob.com/api/province");
    const data = await response.json()
    return data.results
}

export const getDistricts = async (province_id) => {
    const response = await fetch("https://vapi.vnappmob.com/api/province/district/" + province_id);
    const data = await response.json()
    return data.results
}

export const getWards = async (district_id) => {
    const response = await fetch("https://vapi.vnappmob.com/api/province/ward/" + district_id);
    const data = await response.json()
    return data.results
}

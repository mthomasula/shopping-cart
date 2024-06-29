import axios from "axios";

export const fetchProductData = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

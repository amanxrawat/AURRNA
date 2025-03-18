import axios from "axios";



const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Function to fetch all products
export const fetchProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/product/all`);
  return response.data; // Ensure only the data is returned
};


export const fetchProductById = async (productId) => {
  const response = await axios.get(`${API_BASE_URL}/product/${productId}`);
  return response.data; // Ensure only the data is returned
};


export const fetchProductReviewsById = async (productId) => {
  const response = await axios.get(`${API_BASE_URL}/product/${productId}/reviews`);
  return response.data; // Ensure only the data is returned
}




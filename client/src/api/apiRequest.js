// lib/apiRequest.js
import axios from "axios";

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api",
});

// apiRequest.interceptors.request.use(
//   (config) => {

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default apiRequest;

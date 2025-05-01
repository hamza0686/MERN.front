import axios from "axios";

// Replace with your actual Render backend URL
const BASE_URL = "https://mern-back-1-hssc.onrender.com";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // if you're using cookies for auth
});

export default api;

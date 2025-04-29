import axios from 'axios'

export const axiosi=axios.create({withCredentials:true,baseURL:process.env.REACT_APP_BASE_URL})

const BASE_URL = "https://mern-backend.onrender.com/api";
import axios from 'axios';

// const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
const BASE_URL = "http://localhost:7000/api/v1"

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})
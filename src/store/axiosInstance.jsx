import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.in/api',
});

export default axiosInstance;

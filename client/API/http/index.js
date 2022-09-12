import axios from "axios";

export const API_URL = 'http://localhost:4000/';
const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
});

$api.interceptors.request.use((config) => {
  console.log('interceptors', config);
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

// $api.interceptors.response.use((config) => {
//   return config;
// }, async (error) => {
//   const originalRequest = error.config;
//   if (error.response.status === 401 && error.config && !error.config._isRetry) {
//       originalRequest._isRetry = true;
//       try {
//           const response = await axios.get(`${API_URL}/auth/refresh`, {withCredentials: true})
//           localStorage.setItem('token', response.data.accessToken);
//           return $api.request(originalRequest);
//       } catch (e) {
//           console.log('НЕ АВТОРИЗОВАН')
//       }
//   }
//   throw error;
// })


export default $api;
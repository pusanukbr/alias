import axios from 'axios';
// eslint-disable-next-line no-undef
export const API_URL = process.env.REACT_APP_LOCAL_SERVER_URL || 'https://alias.onrender.com/';
const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  method: 'HEAD',
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': API_URL,
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  crossdomain: true
});
// Utility to add JWT
export const setAuthHeader = (token) => {
  $api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  $api.defaults.headers.common.Authorization = '';
};

// $api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
//   return config;
// });

export default $api;

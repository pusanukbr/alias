import axios from 'axios';
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

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

export default $api;

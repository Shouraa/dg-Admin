/* eslint-disable import/prefer-default-export */
/* eslint-disable spaced-comment */
import axios from 'axios';

let BASE_URL;
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3001/api';
} else if (process.env.NODE_ENV === 'production') {
  //TO DO: Production url
  BASE_URL = '/api';
}

export const apiClient = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('loggedUser'));
  const token = user && user.token;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

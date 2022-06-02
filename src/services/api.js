import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.31.76:1337/',
});

export default api;

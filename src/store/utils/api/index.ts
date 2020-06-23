import axios from 'axios';

import { baseUrl, getHeaders } from './config';

const API = {
  get: (endpoint: string) => axios(`${baseUrl}${endpoint}`, {
    method: 'GET',
    headers: getHeaders(),
  })
    .then(res => res.data),
  post: (endpoint: string, payload: any) => axios(`${baseUrl}${endpoint}`, {
    method: 'POST',
    headers: getHeaders(),
    data: payload,
  })
    .then(res => res),
  put: (endpoint: string, payload: any) => axios(`${baseUrl}${endpoint}`, {
    method: 'POST',
    headers: getHeaders(),
    data: payload,
  })
    .then(res => res),
  delete: (endpoint: string) => axios(`${baseUrl}${endpoint}`, {
    method: 'DELETE',
    headers: getHeaders(),
  })
    .then(res => res),
};

export default API;

import axios from 'axios';

import baseUrl from './config';

const API = {
  get: (endpoint: string) => axios(`${baseUrl}${endpoint}`, {
    method: 'GET',
  })
    .then(res => res.data),
  post: (endpoint: string, payload: any) => axios(`${baseUrl}${endpoint}`, {
    method: 'POST',
    headers: null,
    data: JSON.stringify(payload),
  })
    .then(res => res),
  put: (endpoint: string, payload: any) => axios(`${baseUrl}${endpoint}`, {
    method: 'POST',
    headers: null,
    data: JSON.stringify(payload),
  })
    .then(res => res),
  delete: (endpoint: string) => axios(`${baseUrl}${endpoint}`, {
    method: 'DELETE',
  })
    .then(res => res),
};

export default API;

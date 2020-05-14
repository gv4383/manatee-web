import axios from 'axios';

import baseUrl from './config';

const API = {
  get: (endpoint: string) => axios(`${baseUrl}${endpoint}`, {
    method: 'GET',
  })
    .then(res => res.data)
    .catch(err => err),
  post: (endpoint: string, payload: any) => axios(`${baseUrl}${endpoint}`, {
    method: 'POST',
    headers: null,
    data: JSON.stringify(payload),
  })
    .then(res => res)
    .catch(err => err),
  put: (endpoint: string, payload: any) => axios(`${baseUrl}${endpoint}`, {
    method: 'POST',
    headers: null,
    data: JSON.stringify(payload),
  })
    .then(res => res)
    .catch(err => err),
  delete: (endpoint: string) => axios(`${baseUrl}${endpoint}`, {
    method: 'DELETE',
  })
    .then(res => res)
    .catch(err => err),
};

export default API;

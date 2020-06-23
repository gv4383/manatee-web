import { HttpHeaders } from './types';

export const baseUrl = 'http://localhost:5000/api';

export const getHeaders = (): HttpHeaders<string> => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

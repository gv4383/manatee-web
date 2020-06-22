export const EVENTS = {
  FETCH: 'FETCH',
  RESOLVE: 'RESOLVE',
  REJECT: 'REJECT',
  CLEAR: 'CLEAR',
} as const;

export const STATUSES = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
} as const;

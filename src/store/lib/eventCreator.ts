import { EVENTS } from './constants';

interface Event<T = any> {
  type: string;
  data?: T;
  error?: string | null;
}

interface EventCreator {
  fetch: () => Event;
  resolve: (data: any) => Event;
  reject: (error?: string) => Event;
  clear: () => Event;
}

const eventCreator = (constant: string): EventCreator => ({
  fetch: () => ({ type: `${constant}/${EVENTS.FETCH}` }),
  resolve: (data: any) => ({
    type: `${constant}/${EVENTS.RESOLVE}`,
    data,
  }),
  reject: (error?: string) => ({
    type: `${constant}/${EVENTS.REJECT}`,
    error: error || 'There was an unknown error.',
  }),
  clear: () => ({ type: `${constant}/${EVENTS.CLEAR}` }),
});

export default eventCreator;

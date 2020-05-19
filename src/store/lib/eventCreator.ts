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
  fetch: () => ({ type: `${constant}/FETCH` }),
  resolve: (data: any) => ({
    type: `${constant}/RESOLVE`,
    data,
  }),
  reject: (error?: string) => ({
    type: `${constant}/REJECT`,
    error: error || 'There was an unknown error.',
  }),
  clear: () => ({ type: `${constant}/CLEAR` }),
});

export default eventCreator;

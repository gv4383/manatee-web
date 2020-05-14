const actionCreator = (constant: string) => ({
  loading: () => ({ type: `${constant}/LOADING` }),
  success: (data: any) => ({
    type: `${constant}/SUCCESS`,
    payload: data,
  }),
  error: (error: any) => ({
    type: `${constant}/ERROR`,
    error: error || 'There was an unknown error.',
  }),
});

export default actionCreator;

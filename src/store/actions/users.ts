import API from '../utils/api';
import actionCreator from '../lib/actionCreator';

const getUsersAction = actionCreator('GET_USERS');

export const getUsers = () => (dispatch: any) => {
  dispatch(getUsersAction.loading());
  return API.get('/users')
    .then(res => dispatch(getUsersAction.success(res)))
    .catch(error => dispatch(getUsersAction.error(error.message)));
};

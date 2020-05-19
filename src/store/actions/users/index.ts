import Api from '../../utils/api';
import eventCreator from '../../lib/eventCreator';

const getUsersEvent = eventCreator('GET_USERS');

export const getUsers = () => (dispatch: any) => {
  dispatch(getUsersEvent.fetch());

  return Api.get('/users')
    .then(res => dispatch(getUsersEvent.resolve(res)))
    .catch(error => dispatch(getUsersEvent.reject(error)));
};

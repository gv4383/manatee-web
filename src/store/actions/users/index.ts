import Api from '../../utils/api';
import eventCreator from '../../lib/eventCreator';
import { ThunkDispatch } from '../../types';
import { GET_USERS } from './constants';

const getUsersEvent = eventCreator(GET_USERS);

export const getUsers = () => (dispatch: ThunkDispatch) => {
  dispatch(getUsersEvent.fetch());

  return Api.get('/users')
    .then(res => dispatch(getUsersEvent.resolve(res)))
    .catch(error => dispatch(getUsersEvent.reject(error)));
};

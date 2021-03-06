import Api from '../../utils/api';
import eventCreator from '../../lib/eventCreator';
import { ThunkDispatch } from '../../types';
import { GET_USER } from './constants';

const getUserEvent = eventCreator(GET_USER);

export const getUser = (userId: number) => (dispatch: ThunkDispatch) => {
  dispatch(getUserEvent.fetch());

  return Api.get(`/users/${userId}`)
    .then(res => dispatch(getUserEvent.resolve(res)))
    .catch(error => dispatch(getUserEvent.reject(error)));
};

export const clearUser = () => (dispatch: ThunkDispatch) => {
  dispatch(getUserEvent.clear());
};

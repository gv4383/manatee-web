import { combineReducers } from 'redux';

import { FetchUsersState } from './types';

const initialFetchState: FetchUsersState = {
  data: [],
  error: '',
  isLoading: false,
  hasResolved: false,
};

const fetchReducer = (state = initialFetchState, action: any) => {
  switch (action.type) {
    case 'GET_USERS/LOADING':
      return {
        ...state,
        isLoading: true,
        hasResolved: false,
      };
    case 'GET_USERS/SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        hasResolved: true,
      };
    case 'GET_USERS/ERROR':
      return {
        ...state,
        error: action.error,
        isLoading: false,
        hasResolved: true,
      };
    default:
      return state;
  }
};

export default combineReducers({
  fetchUsers: fetchReducer,
});

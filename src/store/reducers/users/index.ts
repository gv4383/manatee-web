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
        isResolved: false,
      };
    case 'GET_USERS/SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isResolved: true,
      };
    case 'GET_USERS/ERROR':
      return {
        ...state,
        error: action.error,
        isLoading: false,
        isResolved: true,
      };
    default:
      return state;
  }
};

export default fetchReducer;

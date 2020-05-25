import {
  UsersData,
  UsersState,
} from './types';

interface UsersEvent {
  data: UsersData;
  error: string;
  type: string;
}

const initialUsersState: UsersState = {
  status: 'IDLE',
  data: null,
  error: null,
};

const idleReducer = (
  state: UsersState,
  event: UsersEvent,
) => {
  switch (event.type) {
    case 'GET_USERS/FETCH':
      return {
        ...state,
        status: 'LOADING',
        error: null,
      };
    default:
      return state;
  }
};

const loadingReducer = (
  state: UsersState,
  event: UsersEvent,
) => {
  switch (event.type) {
    case 'GET_USERS/RESOLVE':
      return {
        status: 'SUCCESS',
        data: event.data,
        error: null,
      };
    case 'GET_USERS/REJECT':
      return {
        ...state,
        status: 'FAILURE',
        error: event.error,
      };
    default:
      return state;
  }
};

const successFailureReducer = (
  state: UsersState,
  event: UsersEvent,
) => {
  switch (event.type) {
    case 'GET_USERS/FETCH':
      return {
        ...state,
        status: 'LOADING',
        error: null,
      };
    case 'GET_USERS/CLEAR':
      return initialUsersState;
    default:
      return state;
  }
};

const users = (
  state: UsersState = initialUsersState,
  event: UsersEvent,
) => {
  switch (state.status) {
    case 'IDLE':
      return idleReducer(state, event);
    case 'LOADING':
      return loadingReducer(state, event);
    case 'SUCCESS':
    case 'FAILURE':
      return successFailureReducer(state, event);
    default:
      return state;
  }
};

export default users;

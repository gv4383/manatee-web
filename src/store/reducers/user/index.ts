import { UserData, UserState } from './types';

interface UserEvent {
  data: UserData;
  error: string;
  type: string;
}

const initialUserState: UserState = {
  status: 'IDLE',
  data: null,
  error: null,
};

const idleReducer = (
  state: UserState,
  event: UserEvent,
) => {
  switch (event.type) {
    case 'GET_USER/FETCH':
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
  state: UserState,
  event: UserEvent,
) => {
  switch (event.type) {
    case 'GET_USER/RESOLVE':
      return {
        status: 'SUCCESS',
        data: event.data,
        error: null,
      };
    case 'GET_USER/REJECT':
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
  state: UserState,
  event: UserEvent,
) => {
  switch (event.type) {
    case 'GET_USER/FETCH':
      return {
        ...state,
        status: 'LOADING',
        error: null,
      };
    case 'GET_USER/CLEAR':
      return initialUserState;
    default:
      return state;
  }
};

const user = (
  state: UserState = initialUserState,
  event: UserEvent,
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

export default user;

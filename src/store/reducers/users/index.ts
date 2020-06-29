import {
  UsersData,
  UsersState,
} from './types';
import { GET_USERS } from '../../actions/users/constants';
import { EVENTS, STATUSES } from '../../lib/constants';

interface UsersEvent {
  data: UsersData;
  error: string;
  type: string;
}

const initialUsersState: UsersState = {
  status: STATUSES.IDLE,
  data: null,
  error: null,
};

const idleReducer = (
  state: UsersState,
  event: UsersEvent,
) => {
  const { type } = event;

  switch (type) {
    case `${GET_USERS}/${EVENTS.FETCH}`:
      return {
        ...state,
        status: STATUSES.LOADING,
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
  const {
    data,
    error,
    type,
  } = event;

  switch (type) {
    case `${GET_USERS}/${EVENTS.RESOLVE}`:
      return {
        status: STATUSES.SUCCESS,
        data,
        error: null,
      };
    case `${GET_USERS}/${EVENTS.REJECT}`:
      return {
        ...state,
        status: STATUSES.FAILURE,
        error,
      };
    default:
      return state;
  }
};

const successFailureReducer = (
  state: UsersState,
  event: UsersEvent,
) => {
  const { type } = event;

  switch (type) {
    case `${GET_USERS}/${EVENTS.FETCH}`:
      return {
        ...state,
        status: STATUSES.LOADING,
        error: null,
      };
    case `${GET_USERS}/${EVENTS.CLEAR}`:
      return initialUsersState;
    default:
      return state;
  }
};

const users = (
  state: UsersState = initialUsersState,
  event: UsersEvent,
) => {
  const { status } = state;

  switch (status) {
    case STATUSES.IDLE:
      return idleReducer(state, event);
    case STATUSES.LOADING:
      return loadingReducer(state, event);
    case STATUSES.SUCCESS:
    case STATUSES.FAILURE:
      return successFailureReducer(state, event);
    default:
      return state;
  }
};

export default users;

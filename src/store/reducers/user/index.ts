import { UserEvent, UserState } from './types';
import { GET_USER } from '../../actions/user/constants';
import { EVENTS, STATUSES } from '../../lib/constants';

const initialUserState: UserState = {
  status: STATUSES.IDLE,
  data: null,
  error: null,
};

const idleReducer = (
  state: UserState,
  event: UserEvent,
) => {
  const { type } = event;

  switch (type) {
    case `${GET_USER}/${EVENTS.FETCH}`:
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
  state: UserState,
  event: UserEvent,
) => {
  const {
    data,
    error,
    type,
  } = event;

  switch (type) {
    case `${GET_USER}/${EVENTS.RESOLVE}`:
      return {
        status: STATUSES.SUCCESS,
        data,
        error: null,
      };
    case `${GET_USER}/${EVENTS.REJECT}`:
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
  state: UserState,
  event: UserEvent,
) => {
  const { type } = event;

  switch (type) {
    case `${GET_USER}/${EVENTS.FETCH}`:
      return {
        ...state,
        status: STATUSES.LOADING,
        error: null,
      };
    case `${GET_USER}/${EVENTS.CLEAR}`:
      return initialUserState;
    default:
      return state;
  }
};

const user = (
  state: UserState = initialUserState,
  event: UserEvent,
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

export default user;

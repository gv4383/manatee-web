import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';

import users from './reducers/users';
import { UsersState } from './reducers/users/types';

interface ReduxWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}

export interface AppState {
  users: UsersState;
}

export interface Action {
  type: string;
  payload?: any;
  error?: string;
}

const middleware = applyMiddleware(thunk);

const devTools = (window as unknown as ReduxWindow).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as unknown as ReduxWindow).__REDUX_DEVTOOLS_EXTENSION__()
  : (x: any) => x;

const rootReducer = combineReducers({ users });

export default createStore(rootReducer, compose(middleware, devTools));

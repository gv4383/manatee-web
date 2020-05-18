import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

interface ReduxWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}

const middleware = applyMiddleware(thunk);

/* eslint-disable */
const devTools = (window as unknown as ReduxWindow).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as unknown as ReduxWindow).__REDUX_DEVTOOLS_EXTENSION__()
  : (x: any) => x;
/* eslint-enable */

export default createStore(rootReducer, compose(middleware, devTools));

import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Dashboard from './views/Dashboard';

import './App.scss';

const App: FunctionComponent = () => (
  <Provider store={store}>
    <div className="App">
      <Dashboard />
    </div>
  </Provider>
);

export default App;

import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import UserCard from './components/UserCard';

import './App.scss';

const App: FunctionComponent = () => (
  <Provider store={store}>
    <div className="App">
      <UserCard />
    </div>
  </Provider>
);

export default App;

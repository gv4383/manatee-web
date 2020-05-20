import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from './store';
import Routes from './components/Routes';

import './App.scss';

const App: FunctionComponent = () => (
  <Provider store={store}>
    <div className="App">
      <HashRouter>
        <Routes />
      </HashRouter>
    </div>
  </Provider>
);

export default App;

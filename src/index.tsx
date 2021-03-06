import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as reducers from './ducks';


const history = createHistory();
const store = createStore(combineReducers({ ...reducers }), applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

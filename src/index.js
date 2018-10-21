import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(reducer, applyMiddleware(epicMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

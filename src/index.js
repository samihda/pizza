/* eslint-disable import/default */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Header from './containers/Header';
import Main from './containers/Main';
import 'purecss/build/pure-min.css';
import './styles/main.scss';

const store = configureStore();
const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

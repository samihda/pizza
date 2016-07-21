/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Header from './containers/Header';
import './styles/main.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Header />
  </Provider>
  , document.getElementById('app')
);

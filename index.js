/* jshint esversion: 6 */

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './src/components/App';
import reducer from './reducer';

const initial = {
  box_value: '',
  items: [
    { key: 1, val: 'apple' },
    { key: 2, val: 'banana' },
    { key: 3, val: 'cherry' }
  ]
};

let store = createStore(reducer, initial);

render(
  /* jshint ignore:start */
  <Provider store={store}>
    <App />
  </Provider>,
  /* jshint ignore:end */
  document.getElementById('app')
);

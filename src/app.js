import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import DynamicList from './dynamic_list';
import reducer from './reducer';

let store = createStore(reducer);

var items = [
  { key: 1, val: 'apple' },
  { key: 2, val: 'banana' },
  { key: 3, val: 'cherry' }
];

render(
  <Provider store={store}>
    <DynamicList items={items} />
  </Provider>,
  document.getElementById('app')
);

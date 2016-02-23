import React from 'react';
import ReactDOM from 'react-dom';

import DynamicList from './dynamic_list';

var items = ['apple', 'banana', 'cherry'];

ReactDOM.render(
  <DynamicList items={items} />,
  document.getElementById('app')
);

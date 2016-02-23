import React from 'react';

import ListItem from './ListItem';

export default props => (
  <ul>
    {props.items.map(item => <ListItem key={item.key} item={item.val} />)}
  </ul>
);

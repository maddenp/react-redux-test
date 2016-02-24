import React from 'react';

import ListItem from './ListItem';
import removeItem from '../actions/removeItem';

export default props => (
  <ul>
    {props.items.map(item => <ListItem key={item.key} item={item.val} onClick={() => props.dispatch(removeItem(item.key))} />)}
  </ul>
);

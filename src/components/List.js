import React from 'react';

import Box from './Box';
import ListItem from './ListItem';

export default props => (
  <div>
    <ul>
      {props.items.map(item => <ListItem key={item.key} item={item.val} onClick={() => props.onItemClick(item.key)} />)}
    </ul>
    <Box box_value={props.box_value} onEntry={props.onEntry} />
  </div>
);

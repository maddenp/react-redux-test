import React from 'react';

import Box from './Box';
import Button from './Button';
import ListItem from './ListItem';

export default props => (
  <div>
    <ul>
      {props.items.map(item => <ListItem key={item.key} item={item.val} onItemClick={() => props.onItemClick(item.key)} />)}
    </ul>
    <Box box_value={props.box_value} onEntry={props.onEntry} />
    <Button onButtonClick={props.onButtonClick} />
  </div>
);

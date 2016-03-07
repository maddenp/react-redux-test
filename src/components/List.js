/* jshint esversion: 6 */

import React from 'react';

import Box from './Box';
import Button from './Button';
import ListItem from './ListItem';

export default props => (
  /* jshint ignore:start */
  <div>
    <Box box_value={props.box_value} onTextEntry={props.onTextEntry} />
    <Button onButtonClick={props.onButtonClick} />
    <ul>
      {props.items.map(item => <ListItem item_key={item.key} item={item.val} onItemClick={() => props.onItemClick(item.key)} />)}
    </ul>
  </div>
  /* jshint ignore:end */
);

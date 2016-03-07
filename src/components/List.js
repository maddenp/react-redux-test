/* jshint esversion: 6 */

import React from 'react';

import Box from './Box';
import Button from './Button';
import ListItem from './ListItem';

export default ({box_value, items, onButtonClick, onItemClick, onTextEntry}) => (
  /* jshint ignore:start */
  <div>
    <Box box_value={box_value} onChange={onTextEntry} />
    <Button onClick={onButtonClick} />
    <ul>
      {items.map(item => <ListItem item_key={item.key} item={item.val} onClick={() => onItemClick(item.key)} />)}
    </ul>
  </div>
  /* jshint ignore:end */
);

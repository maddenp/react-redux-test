import React from 'react';

import ListItem from './list_item';
import removeItem from './actions';

const DynamicList = props => {
  return (
    <ul>
      {props.items.map(item => <ListItem key={item.key} item={item.val} onClick={() => removeItem(item.key)} />)}
    </ul>
  );
}

export default DynamicList

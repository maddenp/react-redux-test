import React from 'react';

import ListItem from './list_item';

const DynamicList = props => {
  return (
    <ul>{props.items.map(item => <ListItem item={item} />)}</ul>
  );
}

export default DynamicList

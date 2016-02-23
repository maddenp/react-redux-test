import React from 'react';

const ListItem = props => {
  return (
    <li key={props.key} onClick={props.onClick}>{props.item}</li>
  );
};

export default ListItem

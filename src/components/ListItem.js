import React from 'react';

export default props => (
  <li key={props.item_key} onClick={props.onItemClick}>{props.item}</li>
);

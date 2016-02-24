import React from 'react';

export default props => (
  <li key={props.key} onClick={props.onItemClick}>{props.item}</li>
);

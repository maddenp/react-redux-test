import React from 'react';

export default props => (
  <li key={props.key} onClick={props.onClick}>{props.item}</li>
);

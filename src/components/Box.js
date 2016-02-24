import React from 'react';

export default props => (
  <input type="text" value={props.box_value} onChange={props.onTextEntry} />
);

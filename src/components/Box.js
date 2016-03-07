/* jshint esversion: 6 */

import React from 'react';

export default props => (
  /* jshint ignore:start */
  <input type="text" value={props.box_value} onChange={props.onTextEntry} />
  /* jshint ignore:end */
);

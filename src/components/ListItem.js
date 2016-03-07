/* jshint esversion: 6 */

import React from 'react';

export default props => (
  /* jshint ignore:start */
  <li key={props.item_key} onClick={props.onItemClick}>{props.item}</li>
  /* jshint ignore:end */
);

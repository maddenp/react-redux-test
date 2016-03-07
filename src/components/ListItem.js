/* jshint esversion: 6 */

import React from 'react';

export default ({item, item_key, onClick}) => (
  /* jshint ignore:start */
  <li key={item_key} onClick={onClick}>{item}</li>
  /* jshint ignore:end */
);

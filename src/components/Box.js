/* jshint esversion: 6 */

import React from 'react';

export default ({box_value, onTextEntry}) => (
  /* jshint ignore:start */
  <input type="text" value={box_value} onChange={onTextEntry} />
  /* jshint ignore:end */
);

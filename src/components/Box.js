/* jshint esversion: 6 */

import React from 'react';

export default ({box_value, onChange}) => (
  /* jshint ignore:start */
  <input type="text" value={box_value} onChange={onChange} />
  /* jshint ignore:end */
);

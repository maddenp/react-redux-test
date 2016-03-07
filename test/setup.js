/* jshint esversion: 6 */

import chai from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import spies from 'chai-spies';
import { expect } from 'chai';

chai.use(spies);

global.chai = chai;
global.element = null;
global.expect = expect;
global.React = React;
global.renderer = ReactTestUtils.createRenderer();

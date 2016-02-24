import chai from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import ListItem from '../src/components/ListItem';

const setup = () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(
    <ListItem key={88} item={'word'} onItemClick={chai.spy(key => ({type: 'a', key: key}))} />
  );
  return renderer.getRenderOutput();
};

describe('ListItem', () => {

  it('is a <li>', () => {
    const output = setup();
    expect(output.type).to.equal('li');
  });

});

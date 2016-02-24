import chai from 'chai';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import ListItem from '../src/components/ListItem';

const renderer = ReactTestUtils.createRenderer();

describe('ListItem', () => {

  let element;

  beforeEach(() => {
    renderer.render(
      <ListItem item_key={'88'} item={'mango'} onItemClick={chai.spy()} />
    );
    element = renderer.getRenderOutput();
  });

  it('Is an <li> element', () => {
    expect(element.type).to.equal('li');
  });

  it('Has the expected key', () => {
    expect(element.key).to.equal('88');
  });

  it('Has the expected text', () => {
    expect(element.props.children).to.equal('mango');
  });

  it('Executes its callback when clicked', () => {
    element.props.onClick();
    expect(element.props.onClick).to.have.been.called();
  });

});

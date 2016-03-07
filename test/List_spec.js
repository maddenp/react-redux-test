/* jshint esversion: 6 */

import List from '../src/components/List';

describe('List', () => {

  beforeEach(() => {
    renderer.render(
      /* jshint ignore:start */
      <List box_value='x' items={[]} />
      /* jshint ignore:end */
    );
    element = renderer.getRenderOutput();
  });

  it('Is a <div>', () => {
    expect(element.type).to.equal('div');
  });

  it('Has three children', () => {
    expect(element.props.children.length).to.equal(3);
  });

  it('Has a <ul> element as its last child', () => {
    const children = element.props.children;
    expect(children[children.length - 1].type).to.equal('ul');
  });

});

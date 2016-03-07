/* jshint esversion: 6 */

import ListItem from '../src/components/ListItem';

describe('ListItem', () => {

  beforeEach(() => {
    renderer.render(
      /* jshint ignore:start */
      <ListItem item_key='88' item='mango' onItemClick={chai.spy()} />
      /* jshint ignore:end */
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

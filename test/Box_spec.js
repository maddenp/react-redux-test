/* jshint esversion: 6 */

import Box from '../src/components/Box';

describe('Box', () => {

  beforeEach(() => {
    renderer.render(
      /* jshint ignore:start */
      <Box box_value='x' onTextEntry={chai.spy()} />
      /* jshint ignore:end */
    );
    element = renderer.getRenderOutput();
  });

  it('Is an <input> element', () => {
    expect(element.type).to.equal('input');
  });

  it('Has the expected value', () => {
    expect(element.props.value).to.equal('x');
  });

  it('Calls its callback when its text is changed', () => {
    element.props.onChange('asdf');
    expect(element.props.onChange).to.have.been.called.with('asdf');
  });

});

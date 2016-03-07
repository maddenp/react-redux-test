/* jshint esversion: 6 */

import Button from '../src/components/Button';

describe('Button', () => {

  beforeEach(() => {
    renderer.render(
      /* jshint ignore:start */
      <Button onButtonClick={chai.spy()} />
      /* jshint ignore:end */
    );
    element = renderer.getRenderOutput();
  });

  it('Is a <button> element', () => {
    expect(element.type).to.equal('button');
  });

  it('Has the expected text', () => {
    expect(element.props.children).to.equal('Add');
  });

  it('Calls its callback when clicked', () => {
    element.props.onClick();
    expect(element.props.onClick).to.have.been.called();
  });

});

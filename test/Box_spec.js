import Box from '../src/components/Box';

describe('Box', () => {

  beforeEach(() => {
    renderer.render(
      <Box box_value={'x'} onEntry={chai.spy()} />
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
    const event = {target: {value: 'hello'}};
    element.props.onChange(event);
    expect(element.props.onChange).to.have.been.called();
    expect(element.props.onChange).to.have.been.called.with(event);
  });

});

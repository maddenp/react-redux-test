import ListItem from '../src/components/ListItem';

describe('ListItem', () => {

  beforeEach(() => {
    renderer.render(
      <ListItem item_key='88' item='mango' onItemClick={chai.spy()} />
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

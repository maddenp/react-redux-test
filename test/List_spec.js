import List from '../src/components/List';

describe('List', () => {

  beforeEach(() => {
    const i = () => {};
    renderer.render(
      <List box_value={'x'} items={[]} onButtonClick={i} onEntry={i} onItemClick={i} />
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

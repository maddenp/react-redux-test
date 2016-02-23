import { connect } from 'react-redux';

import List from '../components/List';

const items = [
  { key: 1, val: 'apple' },
  { key: 2, val: 'banana' },
  { key: 3, val: 'cherry' }
];

const mapStateToProps = (state) => {
  if (!state) state = {items: items};
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(List);
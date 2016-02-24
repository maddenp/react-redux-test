import { connect } from 'react-redux';

import List from '../components/List';

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(List);

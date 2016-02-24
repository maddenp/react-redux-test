import { connect } from 'react-redux';

import List from '../components/List';
import removeItem from '../actions/removeItem';

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (key) => { dispatch(removeItem(key)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

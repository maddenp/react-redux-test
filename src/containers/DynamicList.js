import { connect } from 'react-redux';

import List from '../components/List';

const select = (state) => {
  return {
    items: state.items
  };
};

const actions = (dispatch) => {
  return {
    onItemClick: (key) => { dispatch({type: 'REMOVE', key: key}) }
  };
};

export default connect(select, actions)(List);

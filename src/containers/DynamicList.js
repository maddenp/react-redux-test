import { connect } from 'react-redux';

import List from '../components/List';

const select = (state) => {
  return {
    box_value: state.box_value,
    items: state.items
  };
};

const actions = (dispatch) => {
  return {
    onEntry: val => { dispatch({type: 'ENTRY', val: val}) },
    onItemClick: key => { dispatch({type: 'REMOVE', key: key}) }
  };
};

export default connect(select, actions)(List);

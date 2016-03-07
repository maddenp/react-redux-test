/* jshint esversion: 6 */

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
    onButtonClick: () => { dispatch({type: 'ADD'}); },
    onItemClick: key => { dispatch({type: 'REMOVE', key: key}); },
    onTextEntry: event => { dispatch({type: 'ENTRY', val: event.target.value}); }
  };
};

export default connect(select, actions)(List);

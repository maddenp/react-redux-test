/* jshint esversion: 6 */

export default (state, action) => {

  const actions = {

    'ADD': state => {
      if (state.box_value.length === 0) return state;
      const new_item = {key: state.items[state.items.length - 1].key + 1, val: state.box_value};
      return Object.assign({}, state, {items: state.items.slice().concat(new_item), box_value: ''});
    },

    'ENTRY': state => (
      Object.assign({}, state, {box_value: action.val})
    ),

    'REMOVE': state => (
      Object.assign({}, state, {items: state.items.reduce((m, e) => e.key === action.key ? m : m.concat(e), [])})
    )

  };
  
  return actions[action.type] ? actions[action.type](state) : state;

};

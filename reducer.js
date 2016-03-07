/* jshint esversion: 6 */

const ADD = state => {
  if (state.box_value.length === 0) return state;
  const new_item = {key: state.items[state.items.length - 1].key + 1, val: state.box_value};
  return Object.assign({}, state, {items: state.items.slice().concat(new_item), box_value: ''});
};

const ENTRY = state => (
  Object.assign({}, state, {box_value: action.val})
);

const REMOVE = state => (
  Object.assign({}, state, {items: state.items.reduce((m, e) => e.key === action.key ? m : m.concat(e), [])})
);

export default (state, action) => {
  const f = Object.keys[action.type];
  return typeof(f) === 'function' ? f(state) : state;
};

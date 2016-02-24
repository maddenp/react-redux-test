export default (state, action) => {
  switch (action.type) {
  case 'ADD':
    const new_item = {key: state.items[state.items.length - 1].key + 1, val: state.box_value};
    return Object.assign({}, state, {items: state.items.slice().concat(new_item)});
  case 'ENTRY':
    return Object.assign({}, state, {box_value: action.val});
  case 'REMOVE':
    return Object.assign({}, state, {items: state.items.reduce((m, e) => e.key === action.key ? m : m.concat(e), [])});
  default:
    return state;
  }
}

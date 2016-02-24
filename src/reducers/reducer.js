export default (state, action) => {
  switch (action.type) {
  case 'ENTRY':
    return Object.assign({}, state, {box_value: action.val});
  case 'REMOVE':
    return Object.assign({}, state, {items: state.items.reduce((m, e) => e.key === action.key ? m : m.concat(e), [])});
  default:
    return state;
  }
}

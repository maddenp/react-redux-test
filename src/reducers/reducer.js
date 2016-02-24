export default (state, action) => {
  switch (action.type) {
  case 'REMOVE':
    return { items: state.items.reduce((m, e) => e.key === action.key ? m : m.concat(e), []) };
  default:
    return state;
  }
}

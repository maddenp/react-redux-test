const reducer = (state, action) => {
  switch (action.type) {
  case 'REMOVE':
    return state.items.reduce((m, e) => { e === action.item ? m : m.concat(e); }, []);
  default:
    return state;
  }
}

export default reducer;

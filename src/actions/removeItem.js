const removeItem = key => {
  console.log('REMOVE ' + key);
  return {
    type: 'REMOVE',
    key: key
  };
};

export default removeItem;

export default (...wrappers) => element => {
  let currentElement = element;
  wrappers.forEach(wrap => (currentElement = wrap(currentElement)));
  return currentElement;
};

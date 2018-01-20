export default (...wrappers) => element => {
  let currentElement = element;
  wrappers.reverse().forEach(wrap => (currentElement = wrap(currentElement)));
  return currentElement;
};

export const reorderArray = (array, newStartI) => {
  const start = array.slice(newStartI, array.length);
  const end = array.slice(0, newStartI);
  return start.concat(end);
};

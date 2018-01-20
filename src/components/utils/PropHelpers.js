export const combineClasses = (...classes) =>
  classes
    .filter(e => e)
    .join(" ")
    .trim();

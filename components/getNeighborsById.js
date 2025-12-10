export function getNeighborsById(array, title) {
  const index = array.findIndex((item) => item.title === title);

  if (index === -1) {
    return { index: -1, prev: null, next: null };
  }

  return {
    index: index,
    prev: index > 0 ? array[index - 1] : null,
    next: index < array.length - 1 ? array[index + 1] : null,
  };
}

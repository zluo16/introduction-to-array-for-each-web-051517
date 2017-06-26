function changeCompletely(element, i, array) {
  array[i] = element + (Math.random() * (100 - 1) + 1);
};

function doToElementsInArray(array, callback) {
  array.forEach(callback)
};

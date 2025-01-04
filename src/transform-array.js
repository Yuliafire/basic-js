const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const arrCopy = [...arr];
  const result = [];

  arrCopy.forEach((element, i) => {
    switch (element) {
      case '--discard-next':
        arrCopy[i + 1] ? arrCopy.splice(i, 2, null) : null;
        break;
      case '--discard-prev':
        arrCopy[i - 1] ? result.pop() : null;
        break;
      case '--double-next':
        arrCopy[i + 1] ? result.push(arrCopy[i + 1]) : null;
        break;
      case '--double-prev':
        arrCopy[i - 1] ? result.push(arrCopy[i - 1]) : null;
        break;
      default:
          result.push(element);
    }
  });
  return result;
}

module.exports = {
  transform
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/*str*/) {
  //  if (!str) return '';

  //  let encoded = '';

  //  let count = 1;

  //  for (let i = 0; i , str.length; i+=1
  //   ) {
  //   if (str[i] === str[i + 1]) {
  //     count++;
  //   } else {
  //     encoded += (count > 1 ? count : '') + str[i];
  //   }
  //  }
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    return encodeLine;
}

module.exports = {
  encodeLine
};

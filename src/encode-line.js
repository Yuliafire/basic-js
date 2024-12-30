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
function encodeLine(str) {
  if (str.length === 0) return "";
  //step 1
  // initialize a counter to keep track
  // of consecutive characters
      let count = 1;

      //step 2
      //initialize a new string to build the encoded result;
      let newStr = "";

    //start looping through the second  character
    for (let i = 1; i <= str.length; i++) {
      if (str[i] === str[i - 1]) { //if the current equals to the previous
        count++;
      } else {
        if (count > 1) {
          newStr = newStr + count;
        }
        newStr += str[i - 1];
        count = 1; //reset for a new iteration
        }
      }
    return newStr;
}

module.exports = {
  encodeLine
};

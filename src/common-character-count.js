const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // create frequdncy maps for both strings;
   const count1 = {};
   const count2 = {};

   // populate the frequency map for the first string;
   for (let char of s1) {
     count1[char] = (count1[char] || 0) + 1;
   }

   // populate the frequency map for the second string;
   for (let char of s2) {
    count2[char] = (count2[char] || 0) + 1;
   }

   //calculate the number of common characters;
   let commonCount = 0;
   // iterate through the first frequency map
   for (let char in count1) {
     if (count2[char]) {
      // add the min number of the common chars
      commonCount += Math.min(count1[char], count2[char]);
     }
   }
   return commonCount;
}

module.exports = {
  getCommonCharacterCount
};

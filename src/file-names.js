const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

// Outer Loop: Selects an element to check for duplicates.
// compares the selected element with every other element

//pseudocode
// for each element i in names:
//     for each element j after i in names:
//         if names[i] is equal to names[j]:
//             rename names[j] by appending (count + 1)
//             increment count
//     reset count to 0


function renameFiles(names) {

  let count  = 0; //to keep track of the number of duplicates
   // flatten a nested array
   // infinity is the depth
   names = names.flat(Infinity);

   // outer loop to iterate through ech element
   for (let i = 0; i < names.length; i++) {
   // inner loop to compare the current element with the rest
     for (let j =  i + 1; j < names.length; j++) {
        if (names[i] === names[j]) {
          // rename the dublicate
          names[j] += `(${count + 1})`;
          //increment th4e count of dublicate
          count++;
        }
     }
     //reset the count for the next elements (iterations with i)
     count = 0;
    }
    return names;
}

module.exports = {
  renameFiles
};

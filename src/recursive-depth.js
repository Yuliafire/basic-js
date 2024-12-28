const { NotImplementedError } = require('../extensions/index.js');

/**
 
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// use cases: 
// Data Validation:
// File System Analysis:
// UI Component Trees:
// XML/HTML Parsing:

class DepthCalculator {
  calculateDepth( arr ) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
  
    let maxDepth = 1;

    for (let element of arr) {
      if (Array.isArray(element)) {
        const depth = this.calculateDepth(element);
        if (depth + 1 > maxDepth) {
          maxDepth = depth + 1;
        }
      }
    }
   return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};

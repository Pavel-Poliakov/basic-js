const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//  let a = Array.from(matrix.flat(Infinity))
//  let b = a.reduce((acc,el)=>{if(el>=0){return acc+=el}}
//  ,0)
//  return b
}
// console.log(getMatrixElementsSum([
//    [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3]
//   ]))
module.exports = {
  getMatrixElementsSum
};

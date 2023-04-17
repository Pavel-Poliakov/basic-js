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
let sum = 0;
let arr = [];
arr.push(matrix[0])
for(let i = 0; i<matrix.length;i++){
  for(let j = 0; j<matrix[i].length; j++){
if(matrix[i][j] != 0 && matrix[i] != matrix[matrix.length-1]){
  arr.push(matrix[i+1][j])
}
  }
}
return arr.flat(1).reduce((acc,el)=>{return acc+=el},0)
}

module.exports = {
  getMatrixElementsSum
};

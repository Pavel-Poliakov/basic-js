const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(cats) {
  let arr = []
  cats.forEach(el => {
    el.forEach(item=>{item == "^^"?arr.push(item):false;
    })
  });
  return arr.length>0?arr.length:0
}

module.exports = {
  countCats
};


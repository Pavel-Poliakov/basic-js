const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrNew = [];
  const array = Array.from(arr);
  array.forEach(el=>el>-1?arrNew.push(el):false)
   arrNew.sort((a,b)=>b-a)
   array.forEach((el,index)=>{
    if(el != -1){
      array[index] = arrNew.pop()
    }
   })
   return array
}

module.exports = {
  sortByHeight
};
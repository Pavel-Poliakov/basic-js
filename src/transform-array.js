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
function transform(array) {
  if(!Array.isArray(array)){
    let a = "'arr' parameter must be an instance of the Array!"
    return a;
  }
  else{
    let arr = Array.from(array);
    arr.forEach((el,index)=>{
      if(el==='--discard-next'){arr.splice(index,2)};
      if(el==='--discard-prev'){arr.splice(index-1,2)};
      if(el==='--double-next'){arr[index] = arr[index+1]};
      if(el==='--double-prev'){arr[index] = arr[index-1]};
  })
    return arr
}
}

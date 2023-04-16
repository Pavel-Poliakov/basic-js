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
    let a = "'Arr' parameter must be an instance of the Array!"
    return a;
  } 
  else if(array.length == 0){
    return array
  }else if(array.length>0 && (array.includes('--discard-next') || array.includes('--discard-prev') || array.includes('--double-next') || array.includes('--double-prev'))){
    let arrCopy = Array.from(array).flat(Infinity);
    if(arrCopy.includes('--discard-next') || arrCopy.includes('--discard-prev') || arrCopy.includes('--double-next') || arrCopy.includes('--double-prev')){
      let a = arrCopy.length -1;
      arrCopy.forEach((el,index)=>{
        el==='--discard-next'&& el != arrCopy[a]?arrCopy.splice(index,2):false;
        el==='--discard-prev'&& el != arrCopy[0]?arrCopy.splice(index-1,2):false;
        el==='--double-next' && el != arrCopy[a]?arrCopy[index] = arrCopy[index+1]:false;
        el==='--double-prev' && el != arrCopy[0]?arrCopy[index] = arrCopy[index-1]:false;
      })
    }
   return !arrCopy.includes('--double-next') && !arrCopy.includes('--double-prev') &&
    !arrCopy.includes('--discard-next') && !arrCopy.includes('--discard-prev') ? arrCopy:undefined;
  }
}

module.exports = {
  transform
};


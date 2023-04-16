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
function getCommonCharacterCount(s1,s2) {
let arr = [];
let a = s1.split('').flat();
let b = s2.split('').flat();
for(let i=0;a.length>i;i++){
  for(let j=0;b.length>j;j++){
    if(a[i] === b[j]){
      arr.push(b[j]);
      b.splice(j,1)
      break
    }
  }
}
return arr
}

module.exports = {
  getCommonCharacterCount
};
// console.log(getCommonCharacterCount('aabccfsfsfrs', 'adcaaagsgvfds'))
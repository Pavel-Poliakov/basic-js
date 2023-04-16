const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  let b = 9;
  let res;
  let a = String(n).split('')
  a.forEach(el=>arr.push(Number(el)))
  if(arr[0]<arr[1]){
    arr.shift()
    return +arr.join('');
  }else{
    for(let i = 0; i<arr.length;i++){
     if(b>arr[i]){
       b = arr[i];
       res = i
     }
   }
   arr.splice(res,1)
   return +arr.join('');
  }
}

module.exports = {
  deleteDigit
};

// Ваша задача — реализовать функцию, которая принимает целое число ( n) и возвращает максимальное число, которое можно получить, удалив ровно одну цифру заданного числа.

// Например:

// deleteDigit(152) => 52
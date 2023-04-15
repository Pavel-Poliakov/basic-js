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
  else if((array.includes('--discard-next') || array.includes('--discard-prev')) ){
    let arr = Array.from(array);
    let arr2 = Array.from(array);
    let a = arr.length -1;
    arr.forEach((el,index)=>{
      el==='--discard-next'&& el != arr[a]?arr.splice(index,2):false
      el==='--discard-prev'&& el != arr[0]?arr.splice(index-1,2):false
    })
    if(arr.length != arr2.length){
      return arr
    }
}
else if((array.includes('--double-next') || array.includes('--double-prev')) ){
  let arr = Array.from(array);
    let a = arr.length -1;
    arr.forEach((el,index)=>{
      el==='--double-next' && el != arr[a]?arr[index] = arr[index+1]:false;
      el==='--double-prev' && el != arr[0]?arr[index] = arr[index-1]:false;
    })
    if(!arr.includes('--double-next') && !arr.includes('--double-prev')){
      return arr
    }
}
}

module.exports = {
  transform
};

console.log(transform([]))
// console.log(transform([]))
// console.log(transform(['--discard-prev',5,6]))
// console.log(transform([1, 2, 3, '--double-next']))
// console.log(transform(['--double-prev', 4, 5]))
// Ваша задача — реализовать функцию transform(arr), которая принимает arrayи возвращает преобразованный массив на основе содержащихся в нем управляющих последовательностейarr . Последовательности управления являются определенными stringэлементами упомянутого array:

// --discard-nextисключает следующий элемент массива из преобразованного массива.
// --discard-prevисключает предыдущий элемент массива из преобразованного массива.
// --double-nextдублирует следующий элемент массива в преобразованном массиве.
// --double-prevдублирует предыдущий элемент массива в преобразованном массиве.
// Например:

// transform([1, 2, 3, '--double-next', 4, 5])=>[1, 2, 3, 4, 4, 5]

// transform([1, 2, 3, '--discard-prev', 4, 5])=>[1, 2, 4, 5]

// Функция не должна влиять на исходный массив. Управляющие последовательности применяются слева направо к исходным элементам массива. Управляющие последовательности не попадают в преобразованный массив. Управляющие последовательности в исходном массиве не встречаются подряд. Если рядом с управляющей последовательностью нет элемента , к которому ее можно применить в исходном массиве, или этот элемент ранее был удален, ничего не делает . Функция должна выдать Errorсообщение with, 'arr' parameter must be an instance of the Array!если это arrне Array.

// Напишите свой код в src/transform-array.js.
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

module.exports = {
  transform
};

// console.log(transform([1, 2, 3, '--double-prev', 4, 5]))
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
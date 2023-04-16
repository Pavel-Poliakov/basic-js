const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  let arr2 = [];
  if(Array.isArray(members) && members.length>0){
    members.flat(Infinity).forEach(el=>{
      typeof el === 'string'? arr.push(el.split('')):false;
    })
      //  arr.forEach(el=>{
      //   el.some(item=>{item !== ' ' && item === item.match(/[a-zA-Z]/g) ?arr2.push(item):false})
      //  })
       arr.forEach(el=>{
        // el.forEach(item=>item !== ' ' && item.match(/[a-zA-Z]/i)?arr2.push(item):false)
        for(let i = 0; el.length>i; i++){
          if(el[i] !== ' ' && el[i].match(/[a-zA-Z]/i)){
            arr2.push(el[i])
            break
          }
        }
       })
      //  return arr2.length>0?arr2.sort().join(''):false
       return arr2.length>0?arr2.sort().join('').toUpperCase():false
      // if(arr2.length>0){
      //   return arr2.sort().join('')
      // }else{
      //   return false
      // }
  }else{
    return false
  }
  }
module.exports = {
  createDreamTeam
};

// console.log(
//   createDreamTeam([
//     "Amelia",
//     null,
//     undefined,
//     "Ruby",
//     "Lily",
//     11,
//     "Grace",
//     22,
//     "Millie",
//     "Daisy",
//     true,
//     "Freya",
//     false,
//     "Erin",
//     new Set([1, 2, 3, 4, 5]),
//     "Megan",
//     {
//       John: "Smith"
//     },
//     "Jasmine",
//     1,
//     2,
//     3,
//     4,
//     5,
//     "Brooke"
//   ])
// );




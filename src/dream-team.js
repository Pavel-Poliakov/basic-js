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
    members.forEach(el=>{
      typeof el === 'string'? arr.push(el.split('')):false;
    })
       arr.forEach(el=>{
        el.forEach(item=>{
         while(item != ' ' && item === item.toUpperCase()){
          arr2.push(item);
          break
         }
        })
       })
       return arr2.sort().join('')
  }else{
    return false
  }
  }
module.exports = {
  createDreamTeam
};

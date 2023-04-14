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
  members.forEach(el=>{
    typeof el === 'string' && el.charAt(0).toUpperCase()? arr.push(el[0]):false;
  }
    )
    return arr.length>0?arr.sort().join(''):false
}
module.exports = {
  createDreamTeam
};
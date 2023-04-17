const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = [];
  let a  = email.split('').reverse();
  a.every(el=>el!='@'?arr.push(el):false)
  return arr.reverse().join('')
}
module.exports = {
  getEmailDomain
};

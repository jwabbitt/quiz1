'use strict';

/**
 * @function isEven
 * @description checks if a number is even
 * @param {Number} num - The number to check even-ness
 * @return {Boolean} True if even, false if odd
 */
module.exports = function isEven(num) {
  var even = num % 2;
  if (even == 0) {
    return true;
  } else {
    return false;
  }


};

/* Or to make things more simple
* return !(num % 2);
* because 0 normally equals FALSE and 1 equals TRUE
* With using ! NOT 0 is now TRUE and 1 is now FALSE;
*/

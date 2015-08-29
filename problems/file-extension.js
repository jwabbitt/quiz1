'use strict';

/**
 * @function fileExtension
 * @description gets the file extension from the given filename
 * @param {String} name - The name of the file
 * @return {String|Boolean} The extension (without the period) or false if no
 * extension
 */
module.exports = function fileExtension(name) {
  if (name.indexOf('.') === -1) {
    return false;
  } else {
    return name.split('.').pop();
  }

};

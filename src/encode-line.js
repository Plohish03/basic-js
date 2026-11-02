const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  return str.replace(/([\s\S])\1*/g, (match, char) =>
    (match.length > 1 ? match.length : '') + char);
}

module.exports = {
  encodeLine
};

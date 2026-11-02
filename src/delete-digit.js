const { NotImplementedError } = require('../lib');

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
  const negative = n < 0;
  const digits = String(Math.abs(n));
  const variants = [];

  for (let i = 0; i < digits.length; i++) {
    const rest = digits.slice(0, i) + digits.slice(i + 1);
    variants.push(rest === '' ? 0 : Number(rest));
  }

  if (negative) return -Math.min(...variants);
  return Math.max(...variants);
}

module.exports = {
  deleteDigit
};

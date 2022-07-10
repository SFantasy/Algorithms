/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
  if (x < 2) return x;

  let result = 1;

  for (let i = 2; i < x; i++) {
      if (x / i === i) {
          result = i;
          break;
      } else if (x / i > i) {
          result = i;
      } else if (x / i < i) {
          break;
      }
  }

  return result;
};

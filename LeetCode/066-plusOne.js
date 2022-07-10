/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  // 最暴力的思路，就是直接变成字符串，然后转数字，+1 之后再转回去
  // 问题是：会溢出
  // return `${(+digits.join('') + 1)}`.split('');

  // 所以还是需要遍历数组
  // 首先想到的肯定是从尾部遍历

  for (let n = digits.length - 1; n < digits.length; n--) {
      const current = digits[n] + 1;

      if (current >= 10) {
          digits[n] = current % 10;
          // 加到头了
          if (n === 0) {
              return [1].concat(digits);
          }
          continue;
      } else {
          digits[n] = current;
          return digits;
      }
  }
};

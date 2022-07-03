/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  // 数字范围，1 ~ 3999
  // 即，从 I ~ MMMCMXCIX
  // I             1
  // V             5
  // X             10
  // L             50
  // C             100
  // D             500
  // M             1000

  // 逐个字符解析
  let n = 0;
  // 是否要跳过？
  let jumpFlag = false;

  // 特殊情况
  // 1. I 开头，IV & IX 4,9
  // 2. X 开头，XL & XC 40,90
  // 3. C 开头，CD & CM 400,900

  s.split('').forEach((ch, index) => {
    const hasNextNum = !!s[index + 1];
    const nextNum = s[index + 1];

    if (!jumpFlag) {
      switch (ch) {
        case 'I':
          if (hasNextNum) {
            if (nextNum === 'V') {
              n += 4;
              jumpFlag = true;
            } else if (nextNum === 'X') {
              n += 9;
              jumpFlag = true;
            } else {
              n += 1;
            }
          } else {
            n += 1;
          }
          break;
        case 'V':
          n += 5;
          break;
        case 'X':
          if (hasNextNum) {
            if (nextNum === 'L') {
              n += 40;
              jumpFlag = true;
            } else if (nextNum === 'C') {
              n += 90;
              jumpFlag = true;
            } else {
              n += 10;
            }
          } else {
            n += 10;
          }
          break;
        case 'L':
          n += 50;
          break;
        case 'C':
          if (hasNextNum) {
            if (nextNum === 'D') {
              n += 400;
              jumpFlag = true;
            } else if (nextNum === 'M') {
              n += 900;
              jumpFlag = true;
            } else {
              n += 100;
            }
          } else {
            n += 100;
          }
          break;
        case 'D':
          n += 500;
          break;
        case 'M':
          n += 1000;
          break;
      }
    } else {
      jumpFlag = false;
    }
  });

  return n;
};
// @lc code=end

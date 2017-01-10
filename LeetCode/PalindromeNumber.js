/**
 * Problem: https://leetcode.com/problems/palindrome-number/
 *
 * @author SFantasy
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString().split('').reverse().join('') === x.toString()
};

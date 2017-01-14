// https://leetcode.com/problems/sum-of-two-integers/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var result = a ^ b;
    var carry = (a & b) << 1;
    
    if (carry !== 0) {
        return getSum(result, carry);
    }
    
    return result;
};

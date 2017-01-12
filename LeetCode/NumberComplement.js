// https://leetcode.com/problems/number-complement/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let n = 0;
    let sum = 1;
    
    while (sum < num) {
        n++;
        sum += Math.pow(2, n);
    }
    
    return sum ^ num;

};

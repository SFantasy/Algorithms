// https://leetcode.com/problems/hamming-distance/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let r = x ^ y;
    let n = 0;
    let ret = 0;
    
    while (Math.pow(2, n) <= r) {
        if (Math.pow(2, n) & r) {
            ret++;
        }
        
        n++;
    }
    
    return ret;
};

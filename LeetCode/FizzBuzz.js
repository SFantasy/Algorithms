/**
 * Problem: https://leetcode.com/problems/fizz-buzz/
 * 
 * @author SFantasy
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let ret = [];
    
    for (let i = 1; i <= n; i++) {
        const three = i % 3 === 0;
        const five = i % 5 === 0;
        
        if (three && five) {
            ret.push('FizzBuzz');
        } else if (three) {
            ret.push('Fizz');
        } else if (five) {
            ret.push('Buzz');
        } else {
            ret.push(`${i}`);
        }
    }
    
    return ret;
};

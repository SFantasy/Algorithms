/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) return num;

    return addDigits(addDigits(Math.floor(num / 10)) + addDigits(num % 10));
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x > Math.pow(2, 31) - 1 || x <= -Math.pow(2, 31)) return 0;
    const reverse = x < 0 ?
        -`${-x}`.split('').reverse().join('') :
        +`${x}`.split('').reverse().join('');
    if (reverse > Math.pow(2, 31) - 1 || reverse <= -Math.pow(2, 31)) return 0;
    return reverse;
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split('').reverse().join('');
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseString2 = function(s) {
    var result = [];

    for (var i = s.length - 1; i >= 0; i--) {
        result.push(s.charAt(i));
    }

    return result.join('');
};

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  const n = Array.from(s.matchAll(/\w+/g));
  return n[n.length - 1][0].length;
};

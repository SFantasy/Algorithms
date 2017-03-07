// https://leetcode.com/problems/keyboard-row

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const ROW1 = 'qwertyuiop';
    const ROW2 = 'asdfghjkl';
    const ROW3 = 'zxcvbnm';
    const ROWS = [ROW1, ROW2, ROW3];

    return words.filter(word => {
      let wordLower = word.toLowerCase();
      let row = 0;
      
      ROWS.some((ROW, index) => {
        if (ROW.indexOf(wordLower[0]) > -1) {
          row = index;
          return true;
        }
      });
      
      return wordLower.substring(1, wordLower.length).split('').every(letter => {
        return ROWS[row].indexOf(letter) > -1;
      })
    });
};

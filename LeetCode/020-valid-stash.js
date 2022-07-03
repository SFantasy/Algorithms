/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 这题的核心应该就是维护一个栈
  // ({[ 入栈
  // )}] 出栈
  // 出栈时没有对应的就 return false

  const stash = [];
  const totalLength = s.length;
  const mapping = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let index = 0; index < totalLength; index++) {
    const ch = s[index];
    // Push
    if (['(', '{', '['].includes(ch)) {
      stash.push(ch);
      // 遍历结束了
      if (index === totalLength - 1) return false;
    } else {

      if (stash[stash.length - 1] === mapping[ch]) {
        stash.splice(stash.length - 1, 1);
        // 删完发现已经遍历完了
        if (index === totalLength - 1) {
          if (stash.length === 0) return true;
          return false;
        }
      } else {
        return false;
      }
    }
  }
};

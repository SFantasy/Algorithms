/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let n = 0;

  for (let i = 0; i < nums.length; i++) {
      // 找到了，直接返回位置
      if (nums[i] === target) return i;

      if (nums[i] < target) {
          n = i + 1;
          continue;
      }
  }

  return n;
};
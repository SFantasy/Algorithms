/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let m = new Map();

  for (let i = 0; i < nums.length; i++) {
      const current = (m.get(nums[i]) || 0) + 1;
      if (current > nums.length / 2) return nums[i];
      m.set(nums[i], current);
  }
};

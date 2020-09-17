/**
 * Hash 的方式实现
 *
 * [2,7,11,12] 9
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const hash = new Map();

  // 构造 HashMap
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const key = target - nums[i];

    if (hash.has(current)) {
      return [hash.get(current), i];
    }

    hash.set(key, i);
  }

  return [];
};

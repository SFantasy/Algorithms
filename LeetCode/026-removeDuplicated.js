var removeDuplicates = function(nums) {
  if (nums.length <= 1) return nums;

  // 由于需要修改原始数组，因此只能遍历了
  let current = nums[0];
  let n = false;

  for (let i = 1; i <= nums.length; !n && i++) {
      if (nums[i] === current) {
          nums.splice(i, 1);
          n = true;
      } else {
          current = nums[i];
          n = false;
      }
  }

  return nums.length;
};

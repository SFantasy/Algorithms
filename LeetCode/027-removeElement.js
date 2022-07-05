/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let flag = false;

  for (let i = 0; i < nums.length; !flag && i++) {
      if (nums[i] === val) {
          nums.splice(i, 1);
          flag = true;
      } else {
          flag = false;
      }
  }

  return nums.length;
};

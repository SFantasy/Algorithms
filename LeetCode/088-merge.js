/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  let index2 = n - 1;
  let index1 = m - 1;
  let index = m + n - 1;

  // iterate num2 and num1 from right
  // put the correct element in position
  while (index >= 0) {
      // 后面的比前面大
      if (index1 < 0 || nums2[index2] > nums1[index1]) {
          nums1[index] = nums2[index2];
          index--;
          index2--;
      } else {
          nums1[index] = nums1[index1];
          index--;
          index1--;
      }
  }
};

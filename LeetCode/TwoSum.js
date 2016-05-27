/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j]== target) {
                result = [i, j];
                break;
            }
        }
    }

    return result;
};

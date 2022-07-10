/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  if (nums.length < 3) return [];

  const sortedArray = nums.sort((prev, next) => prev - next);

  let result = [];
  let head = 0;
  let tail = sortedArray.length - 1;
  let mid;

  while (sortedArray[head] <= 0 && head < tail) {

      // const currentResult = [];
      const num1 = sortedArray[head];
      const num2 = sortedArray[tail];
      console.log('outer: ', sortedArray, num1, num2);

      //
      if (num1 + num2 > 0) {
          mid = head + 1;

          while (sortedArray[mid] <= 0) {
              const num3 = sortedArray[mid];
              // Find it
              if (num1 + num2 + num3 === 0) {
                  result.push([num1, num3, num2]);
                  tail--;
                  break;
              }

              mid++;
          }
      } else {
          mid = tail - 1;

          while (sortedArray[mid] >= 0) {
            // console.log(num1, num2, 'mid: ', mid, sortedArray[mid]);
              const num3 = sortedArray[mid];

              if (num1 + num2 + num3 === 0) {
                  result.push([num1, num3, num2]);
                  tail--;
                  break;
              }

              mid--;
          }
      }

      head++;
  }

  return result;
};

console.log(
  threeSum([0, 0, 0, 0])
);

function separateLiquids(glass) {
  'use strict';

  if (!glass.length) return [];
  let arr = [];
  let result = [];
  let valMap = { H: 1.36, W: 1.00, A: 0.87, O: 0.80 };
  let width = 0;

  glass.forEach(row => {
    width = row.length;
    arr = arr.concat(row);
  });

  // Sort the whole array
  arr.sort((a, b) => {
    return valMap[a] - valMap[b];
  });

  while (arr.length) {
    result.push(arr.splice(0, width));
  }

  return result;
}

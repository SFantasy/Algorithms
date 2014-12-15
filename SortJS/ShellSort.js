/**
 *
 * ShellSort.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-14
 * @update 2014-12-14
 */

exports.staticShellSort = function (arr) {

  console.log('\nStatic gap shell sort...');

  for (var g = 0; g < arr.gaps.length; g++) {
    // 根据Gap的值循环数组，实质上是讲数组分割为几个组
    for (var i = arr.gaps[g]; i < arr.dataStore.length; i++) {
      var temp = arr.dataStore[i];

      for (var j = i;
           j >= arr.gaps[g] && arr.dataStore[j - arr.gaps[g]] > temp;
           j -= arr.gaps[g]) {
        arr.dataStore[j] = arr.dataStore[j - arr.gaps[g]];
      }

      arr.dataStore[j] = temp;
    }
  }

  return arr.dataStore;
};

exports.dynamicShellSort = function (arr) {

  console.log('\nDynamic gap shell sort...');

  var N = arr.dataStore.length;
  var h = 1;

  while (h < N /3) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    for (var i = h; i < N; i++) {
      for (var j = i;
           j >= h && arr.dataStore[j] < arr.dataStore[j - h];
           j -= h) {
        arr.swap(arr, j, j - h);
      }

      h = (h - 1) / 3;
    }
  }

  return arr.dataStore;
};
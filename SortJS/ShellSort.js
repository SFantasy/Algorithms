/**
 *
 * ShellSort.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-14
 * @update 2014-12-14
 */

module.exports = function (arr) {

  console.log('\nShell sort...');

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
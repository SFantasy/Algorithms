/**
 *
 * SelectionSort
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-11
 * @update 2014-10-11
 */

module.exports = function (arr) {

  console.log('\nSelection sort...');

  var i, j, min;

  for (i = 0; i < arr.dataStore.length; i++) {
    min = i;

    for (j = i + 1; j < arr.dataStore.length; j++) {
      if (arr.dataStore[min] > arr.dataStore[j]) {
        min = j;
      }
    }

    if (min !== i) {
      arr.swap(arr.dataStore, min, i);
    }
  }

  return arr.dataStore;

};
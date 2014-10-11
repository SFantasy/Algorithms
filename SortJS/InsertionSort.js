/**
 *
 * InsertionSort
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-02
 * @update 2014-10-03
 */

module.exports = function (arr) {

  console.log('\nInsertion sort...');

  var currentNum, o;

  for (var i = 0; i < arr.dataStore.length; i++) {
    currentNum = arr.dataStore[i];
    o = i;

    while (o > 0 && (arr.dataStore[o - 1] >= currentNum)) {
      arr.dataStore[o] = arr.dataStore[o - 1];
      o--;
    }

    arr.dataStore[o] = currentNum;
  }

  return arr.dataStore;

};
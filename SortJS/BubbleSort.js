/**
 *
 * BubbleSort
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-09-21
 * @update 2014-09-21
 */

var CArray = require('./CArray');
var arr = new CArray();

module.exports = function () {
    var numElements = arr.dataStore.length;

    var temp;

    for (var i = numElements; i >= 2; --i) {
        for (var j = 0; j < i - 1; ++j) {
            if (arr.dataStore[j] > arr.dataStore[j + 1]) {
                arr.swap(arr.dataStore, j , j+1);
            }
        }
    }
};
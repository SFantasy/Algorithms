/**
 *
 * Sample
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-09-21
 * @update 2014-10-02
 */

var CArray = require('./CArray');
var arr = new CArray(10);
arr.setData();

// Require different sort methods
//var BubbleSort = require('./BubbleSort');
//console.log(BubbleSort(arr));

var InsertionSort = require('./InsertionSort');

console.log(InsertionSort(arr));
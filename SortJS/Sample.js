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
var arr = new CArray(20);
// Require different sort methods
// Bubble
arr.setData();
var BubbleSort = require('./BubbleSort');
arr.cost(BubbleSort(arr));

// Insertion
arr.setData();
var InsertionSort = require('./InsertionSort');
arr.cost(InsertionSort(arr));
/**
 *
 * Sample
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-09-21
 * @update 2014-12-14
 */

var CArray = require('./CArray');
var arr = new CArray(1000);

// Require different sort methods
// -------------------------------
// Insertion
arr.setData();
var InsertionSort = require('./InsertionSort');
arr.cost(InsertionSort(arr));

// Selection
arr.setData();
var SelectionSort = require('./SelectionSort');
arr.cost(SelectionSort(arr));

// Bubble
arr.setData();
var BubbleSort = require('./BubbleSort');
arr.cost(BubbleSort(arr));

// Shell
arr.setData();
var ShellSort = require('./ShellSort');
arr.cost(ShellSort(arr));

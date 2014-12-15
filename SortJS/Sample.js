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

// Require different sort methods
// -------------------------------
// Insertion
var InsertionSort = require('./InsertionSort');
CArray.cost(InsertionSort);

// Selection
var SelectionSort = require('./SelectionSort');
CArray.cost(SelectionSort);

// Bubble
var BubbleSort = require('./BubbleSort');
CArray.cost(BubbleSort);

// Shell
var ShellSort = require('./ShellSort');
CArray.cost(ShellSort.staticShellSort);
CArray.cost(ShellSort.dynamicShellSort);

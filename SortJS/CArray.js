/**
 *
 * CArray
 *
 * @credit p145 on Data Structure and Algorithms with JavaScript
 * @description
 * @create 2014-09-21
 * @update 2014-12-14
 */

var CArray = function (numElements) {

  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.gaps = [5, 3, 1];

  for (var i = 0 ; i < numElements; ++i) {
    this.dataStore[i] = i;
  }

};

CArray.prototype.insert = function (el) {
    this.dataStore[this.pos++] = el;
};

CArray.prototype.toString = function () {
    var restr = '';
    for (var i = 0; i < this.dataStore.length; ++i) {
        restr += this.dataStore[i] + ' ';
        if (i > 0 && i % 10 === 0) {
            restr += '\n';
        }
    }
};

CArray.prototype.clear = function () {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
};

CArray.prototype.setData = function (arr) {

    if (typeof arr === 'undefined') {
        for (var i = 0; i < this.numElements; ++i) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1) * 5);
        }
    } else {
        this.dataStore = arr;
    }
};

CArray.prototype.swap = function (arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};


CArray.prototype.getGaps = function (arr) {
  this.gaps = arr;
};


exports.cost = function (fn) {
  var arr = new CArray(100000);
  arr.setData();

  var startTime = new Date();

  fn(arr);

  console.log('Time cost: ' + (new Date() - startTime) + 'ms\n');
};

exports.CArray = CArray;

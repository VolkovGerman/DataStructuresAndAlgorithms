"use strict";
var sorting = require("../algorithms/sorting");
var List = (function () {
    function List(num) {
        this.dataStore = [];
        this.pos = 0;
        for (var i = 0; i < num; i++) {
            this.dataStore[i] = Math.floor(Math.random() * 100);
        }
    }
    List.prototype.size = function () {
        return this.dataStore.length;
    };
    List.prototype.toString = function () {
        return this.dataStore.toString();
    };
    List.prototype.append = function (el) {
        this.dataStore.push(el);
    };
    List.prototype.insert = function (el, pos) {
        if (pos > -1) {
            this.dataStore.splice(pos, 0, el);
            return true;
        }
        return false;
    };
    List.prototype.remove = function (el) {
        var pos = this.find(el);
        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        }
        return false;
    };
    List.prototype.clear = function () {
        for (var _i = 0, _a = this.dataStore; _i < _a.length; _i++) {
            var el = _a[_i];
            el = null;
        }
    };
    List.prototype.find = function (searched) {
        this.dataStore.forEach(function (val, index) {
            if (val == searched)
                return index;
        });
        return -1;
    };
    List.prototype.getElement = function (index) {
        return this.dataStore[index];
    };
    List.prototype.reset = function () {
        this.pos = 0;
    };
    List.prototype.first = function () {
        this.reset();
        return this.next();
    };
    List.prototype.next = function () {
        return this.dataStore[this.pos++];
    };
    List.prototype.hasNext = function () {
        return this.pos <= this.size();
    };
    List.prototype.each = function (callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    };
    List.prototype.swap = function (index1, index2) {
        var temp = this.dataStore[index1];
        this.dataStore[index1] = this.dataStore[index2];
        this.dataStore[index2] = temp;
    };
    List.prototype.setValue = function (index, val) {
        if (index >= 0 && index < this.size()) {
            this.dataStore[index] = val;
        }
    };
    List.prototype.bubbleSort = function () {
        sorting.bubbleSort.call(this);
    };
    List.prototype.selectionSort = function () {
        sorting.selectionSort.call(this);
    };
    List.prototype.insertionSort = function () {
        sorting.insertionSort.call(this);
    };
    List.prototype.quickSort = function () {
        this.dataStore = sorting.quickSort(this.dataStore);
    };
    List.prototype.shellSort = function () {
        sorting.shellSort.call(this);
    };
    return List;
}());
exports.List = List;

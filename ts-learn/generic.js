"use strict";
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    GenericNumber.prototype.countNum = function (value, v2) {
        return value;
    };
    return GenericNumber;
}());
var p = new GenericNumber();
p.number = 1;
p.countNum(1, false);
//返回值类型遵循鸭式变形法;成员少的兼容成员多的
var f = function () { return ({ name: "alice" }); };
var g = function () { return ({ name: "alice", location: "beijing" }); };
f = g;
var handler = function (v) { };
var handler1 = function (h) { };

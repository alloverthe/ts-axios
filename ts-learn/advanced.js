"use strict";
//ts保证在某个区块内调用某个方法
var Java = /** @class */ (function () {
    function Java() {
    }
    return Java;
}());
var JavaScript = /** @class */ (function () {
    function JavaScript() {
    }
    JavaScript.prototype.handleJavaScript = function () {
        console.log(111);
    };
    return JavaScript;
}());
var java = new Java();
java.handleJava();

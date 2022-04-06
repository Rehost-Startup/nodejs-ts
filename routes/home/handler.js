"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeHandler = void 0;
var HomeHandler = /** @class */ (function () {
    function HomeHandler() {
    }
    HomeHandler.prototype.demo = function (req, res) {
        res.status(200).send('Hello World');
    };
    return HomeHandler;
}());
exports.HomeHandler = HomeHandler;

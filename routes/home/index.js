"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
var handler_1 = require("./handler");
var express_1 = require("express");
var homeRouter = (0, express_1.Router)();
exports.homeRouter = homeRouter;
var homeHandler = new handler_1.HomeHandler();
// get
homeRouter.get('/', homeHandler.demo);

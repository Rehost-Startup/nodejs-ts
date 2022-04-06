"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
var home_1 = require("./home");
var router = express.Router();
exports.router = router;
router.use('/', home_1.homeRouter);

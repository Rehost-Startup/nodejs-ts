"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var index_1 = require("./routes/index");
var PORT = 3000;
var run_server = function (PORT) {
    // initialise server
    var app = (0, express_1.default)();
    // middlewares 
    app.use(body_parser_1.default.urlencoded({ extended: false })); // accept json payload
    app.use(body_parser_1.default.json()); // accept json payload
    app.use((0, cors_1.default)({
        credentials: true,
        origin: [
            'http://127.0.0.1',
        ]
    })); // allow CORS
    app.use('/', index_1.router);
    app.listen(PORT, function () {
        console.log("Server started at http://localhost:".concat(PORT));
    });
};
run_server(PORT);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Db {
    constructor() {
        this.DB_URL = "mongodb://link-db/todo-api";
    }
    createConnection() {
        mongoose.connect(this.DB_URL);
    }
}
exports.default = Db;

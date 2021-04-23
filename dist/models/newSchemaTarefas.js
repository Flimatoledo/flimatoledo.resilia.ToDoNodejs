"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const NewSchemaTarefas = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    publishDate: { type: Date },
    status: { type: Boolean },
    userID: { type: String },
});
exports.default = NewSchemaTarefas;

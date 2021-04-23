"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const NewSchemaUsuario = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    senha: { type: String },
});
exports.default = NewSchemaUsuario;

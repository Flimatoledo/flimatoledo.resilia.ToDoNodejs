"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const newSchemaUsuario_1 = require("../models/newSchemaUsuario");
exports.default = mongoose.model("usuarios", newSchemaUsuario_1.default);

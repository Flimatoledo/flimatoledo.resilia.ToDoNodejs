"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const newSchemaTarefas_1 = require("../models/newSchemaTarefas");
exports.default = mongoose.model("tarefas", newSchemaTarefas_1.default);

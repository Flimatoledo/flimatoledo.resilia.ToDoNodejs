"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db_1 = require("./infra/db");
const newControllerUsuarios_1 = require("./controller/newControllerUsuarios");
const newControllerTarefas_1 = require("./controller/newControllerTarefas");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new db_1.default();
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "API FUNCIONANDO ultima versao" });
        });
        this.app.route("/api/v1/usuarios").get(newControllerUsuarios_1.default.get);
        this.app.route("/api/v1/usuarios/:id").get(newControllerUsuarios_1.default.getById);
        this.app.route("/api/v1/usuarios/").post(newControllerUsuarios_1.default.create);
        this.app.route("/api/v1/usuarios/:id").put(newControllerUsuarios_1.default.update);
        this.app.route("/api/v1/usuarios/:id").delete(newControllerUsuarios_1.default.delete);
        this.app.route("/api/v1/tarefas").get(newControllerTarefas_1.default.get);
        this.app.route("/api/v1/tarefas/:id").get(newControllerTarefas_1.default.getById);
        this.app.route("/api/v1/tarefas/").post(newControllerTarefas_1.default.create);
        this.app.route("/api/v1/tarefas/:id").put(newControllerTarefas_1.default.update);
        this.app.route("/api/v1/tarefas/:id").delete(newControllerTarefas_1.default.delete);
    }
}
exports.default = new StartUp();

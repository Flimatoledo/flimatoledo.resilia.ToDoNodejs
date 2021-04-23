"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newServiceTarefas_1 = require("./../services/newServiceTarefas");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class NewsControllerTarefas {
    get(req, res) {
        newServiceTarefas_1.default.get()
            .then((tarefas) => helper_1.default.sendResponse(res, HttpStatus.OK, tarefas))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        newServiceTarefas_1.default.getById(_id)
            .then((tarefas) => helper_1.default.sendResponse(res, HttpStatus.OK, tarefas))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        newServiceTarefas_1.default.create(vm)
            .then((tarefas) => helper_1.default.sendResponse(res, HttpStatus.OK, "Usuario Cadastrado com Sucesso!"))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let tarefas = req.body;
        newServiceTarefas_1.default.update(_id, tarefas)
            .then((usuarios) => helper_1.default.sendResponse(res, HttpStatus.OK, `${usuarios.name}atualizado com sucesso`))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        newServiceTarefas_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "deletado com sucesso!"))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new NewsControllerTarefas();

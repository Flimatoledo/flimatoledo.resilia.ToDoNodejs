"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newServiceUsuario_1 = require("./../services/newServiceUsuario");
const HttpStatus = require("http-status");
const helper_1 = require("../infra/helper");
class NewsControllerUsuarios {
    get(req, res) {
        newServiceUsuario_1.default.get()
            .then((usuarios) => helper_1.default.sendResponse(res, HttpStatus.OK, usuarios))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        newServiceUsuario_1.default.getById(_id)
            .then((usuarios) => helper_1.default.sendResponse(res, HttpStatus.OK, usuarios))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        newServiceUsuario_1.default.create(vm)
            .then((usuarios) => helper_1.default.sendResponse(res, HttpStatus.OK, "Usuario Cadastrado com Sucesso!"))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let usuarios = req.body;
        newServiceUsuario_1.default.update(_id, usuarios)
            .then((usuarios) => helper_1.default.sendResponse(res, HttpStatus.OK, `${usuarios.name}atualizado com sucesso`))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        newServiceUsuario_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.OK, "deletado com sucesso!"))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new NewsControllerUsuarios();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newRepositoryUsuario_1 = require("../repository/newRepositoryUsuario");
class NewServiceUsuario {
    get() {
        return newRepositoryUsuario_1.default.find({});
    }
    getById(_id) {
        return newRepositoryUsuario_1.default.findById(_id);
    }
    create(usuarios) {
        return newRepositoryUsuario_1.default.create(usuarios);
    }
    update(_id, usuarios) {
        return newRepositoryUsuario_1.default.findByIdAndUpdate(_id, usuarios);
    }
    delete(_id) {
        return newRepositoryUsuario_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new NewServiceUsuario();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newRepositoryTarefas_1 = require("../repository/newRepositoryTarefas");
class NewServiceTarefas {
    get() {
        return newRepositoryTarefas_1.default.find({});
    }
    getById(_id) {
        return newRepositoryTarefas_1.default.findById(_id);
    }
    create(tarefas) {
        return newRepositoryTarefas_1.default.create(tarefas);
    }
    update(_id, tarefas) {
        return newRepositoryTarefas_1.default.findByIdAndUpdate(_id, tarefas);
    }
    delete(_id) {
        return newRepositoryTarefas_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new NewServiceTarefas();

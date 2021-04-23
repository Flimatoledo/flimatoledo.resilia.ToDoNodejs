import NewServiceTarefas from "./../services/newServiceTarefas";
import HttpStatus = require("http-status");
import Helper from '../infra/helper'
class NewsControllerTarefas {
  

  get(req, res) {
    NewServiceTarefas.get()
      .then((tarefas) => Helper.sendResponse(res, HttpStatus.OK, tarefas))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
  getById(req, res) {
    const _id = req.params.id;

    NewServiceTarefas.getById(_id)
      .then((tarefas) => Helper.sendResponse(res, HttpStatus.OK, tarefas))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
  create(req, res) {
    let vm = req.body;
    NewServiceTarefas.create(vm)
      .then((tarefas) =>
        Helper.sendResponse(res, HttpStatus.OK, "Usuario Cadastrado com Sucesso!")
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    let tarefas = req.body;

    NewServiceTarefas.update(_id, tarefas)
      .then((usuarios:any) =>
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          `${usuarios.name}atualizado com sucesso`
        )
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;

    NewServiceTarefas.delete(_id)
      .then(() =>
        Helper.sendResponse(res, HttpStatus.OK, "deletado com sucesso!")
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
}
export default new NewsControllerTarefas();

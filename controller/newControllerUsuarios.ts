import NewServiceUsuario from "./../services/newServiceUsuario";
import HttpStatus = require("http-status");
import Helper from '../infra/helper'
class NewsControllerUsuarios {
  

  get(req, res) {
    NewServiceUsuario.get()
      .then((usuarios) => Helper.sendResponse(res, HttpStatus.OK, usuarios))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
  getById(req, res) {
    const _id = req.params.id;

    NewServiceUsuario.getById(_id)
      .then((usuarios) => Helper.sendResponse(res, HttpStatus.OK, usuarios))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
  create(req, res) {
    let vm = req.body;
    NewServiceUsuario.create(vm)
      .then((usuarios) =>
        Helper.sendResponse(res, HttpStatus.OK, "Usuario Cadastrado com Sucesso!")
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    let usuarios = req.body;

    NewServiceUsuario.update(_id, usuarios)
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

    NewServiceUsuario.delete(_id)
      .then(() =>
        Helper.sendResponse(res, HttpStatus.OK, "deletado com sucesso!")
      )
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }
}
export default new NewsControllerUsuarios();

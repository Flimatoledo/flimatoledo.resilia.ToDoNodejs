import express = require("express");
import Db from "./infra/db";
import NewControllerUsuarios from "./controller/newControllerUsuarios";
import NewControllerTarefas from "./controller/newControllerTarefas";

class StartUp {
  public app: express.Application;
  private _db: Db;

  constructor() {
    this.app = express();
    this._db = new Db();
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

    this.app.route("/api/v1/usuarios").get(NewControllerUsuarios.get);
    this.app.route("/api/v1/usuarios/:id").get(NewControllerUsuarios.getById);
    this.app.route("/api/v1/usuarios/").post(NewControllerUsuarios.create);
    this.app.route("/api/v1/usuarios/:id").put(NewControllerUsuarios.update);
    this.app.route("/api/v1/usuarios/:id").delete(NewControllerUsuarios.delete);

    this.app.route("/api/v1/tarefas").get(NewControllerTarefas.get);
    this.app.route("/api/v1/tarefas/:id").get(NewControllerTarefas.getById);
    this.app.route("/api/v1/tarefas/").post(NewControllerTarefas.create);
    this.app.route("/api/v1/tarefas/:id").put(NewControllerTarefas.update);
    this.app.route("/api/v1/tarefas/:id").delete(NewControllerTarefas.delete);
  }
}

export default new StartUp();

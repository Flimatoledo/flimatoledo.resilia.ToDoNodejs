import NewRepositoryUsuario from "../repository/newRepositoryUsuario";

class NewServiceUsuario{
  get() {
    return NewRepositoryUsuario.find({});
  }

  getById(_id) {
    return NewRepositoryUsuario.findById(_id);
  }

  create(usuarios) {
    return NewRepositoryUsuario.create(usuarios);
  }

  update(_id, usuarios) {
    return NewRepositoryUsuario.findByIdAndUpdate(_id, usuarios);
  }

  delete(_id) {
    return NewRepositoryUsuario.findByIdAndRemove(_id);
  }
}

export default new NewServiceUsuario();
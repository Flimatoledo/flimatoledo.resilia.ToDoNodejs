import NewRepositoryTarefas from "../repository/newRepositoryTarefas";

class NewServiceTarefas{
  get() {
    return NewRepositoryTarefas.find({});
  }

  getById(_id) {
    return NewRepositoryTarefas.findById(_id);
  }

  create(tarefas) {
    return NewRepositoryTarefas.create(tarefas);
  }

  update(_id, tarefas) {
    return NewRepositoryTarefas.findByIdAndUpdate(_id, tarefas);
  }

  delete(_id) {
    return NewRepositoryTarefas.findByIdAndRemove(_id);
  }
}

export default new NewServiceTarefas();
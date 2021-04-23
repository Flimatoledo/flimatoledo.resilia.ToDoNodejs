import mongoose = require("mongoose");

import NewSchemaTarefas from "../models/newSchemaTarefas";

export default mongoose.model("tarefas", NewSchemaTarefas);

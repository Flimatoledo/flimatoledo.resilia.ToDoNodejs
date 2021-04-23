import mongoose = require("mongoose");

const NewSchemaTarefas = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  publishDate: { type: Date },
  status: { type: Boolean },
  userID: { type: String },
});

export default NewSchemaTarefas;

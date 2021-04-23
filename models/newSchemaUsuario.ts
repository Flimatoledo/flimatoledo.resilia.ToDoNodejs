import mongoose = require("mongoose");

const NewSchemaUsuario = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  senha: { type: String },
});

export default NewSchemaUsuario;

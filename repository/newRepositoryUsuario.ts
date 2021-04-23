import mongoose = require("mongoose");

import NewSchemaUsuario from "../models/newSchemaUsuario";

export default mongoose.model("usuarios", NewSchemaUsuario);

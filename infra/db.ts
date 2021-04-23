import mongoose = require("mongoose");

class Db {
  private DB_URL = "mongodb://link-db/todo-api";

  createConnection() {
  mongoose.connect(this.DB_URL); 
}
}

export default Db;

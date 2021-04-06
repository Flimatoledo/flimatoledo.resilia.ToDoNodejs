
const express = require('express')
const chalk = require('chalk')

const tarefaController = require('./controller/tarefa-controller.js');
const usuarioController = require('./controller/usuario-controller.js');

const app = express()

app.use(express.json())
app.use(function(req, res, next) {
  console.log(`[INFO]: uma requisição ${req.method} chegou no ${req.path}`);
  next();
})


tarefaController(app);
usuarioController(app);

app.listen(3000, () => {
  console.log(chalk.blue(`Rastreamento da aplicação sendo feito com nodemon`))
})
function usuarioController(app) {

  let tarefaID = 1;

  app.get('/tarefas', function (req, res) {

    return res.json({

      tarefas: [{
        tarefaid: tarefaID++,
        titulo: "titulo",
        descricao: "string",
        data: new Intl.DateTimeFormat("pt-br", {}).format(
          new Date()),
        verbo: "GET"

      }]
    })
  })

  app.post('/tarefas', function (req, res) {

    return res.json({

      tarefas: [{
        tarefaid: tarefaID++,
        titulo: "titulo",
        descricao: "string",
        data: new Intl.DateTimeFormat("pt-br", {}).format(
          new Date()),
        Verbo: "POST",
      }]
    })
  })
}

module.exports = usuarioController
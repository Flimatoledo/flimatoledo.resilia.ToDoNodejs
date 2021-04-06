
function usuarioController(app) {

  app.get('/usuarios', function (req, res) {

    return res.json({

      user: {
        nome: "Felipe",
        email: "flimatoledo@gmail.com",
        senha: "Felipe1",
        verbo: "GET"

      }
    })

  })

  app.post('/usuarios', function (req, res) {

    return res.json({

      user: {
        nome: "Felipe",
        email: "flimatoledo@gmail.com",
        senha: "Felipe1",
        verbo: "POST"

      }
    })

  })
}



module.exports = usuarioController
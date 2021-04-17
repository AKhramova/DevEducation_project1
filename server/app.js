var http = require('http')
var { json } = require('body-parser')
var jsonParser = json()
var { question } = require('./routes/questions')
var { team } = require('./routes/team/team')
var { XML, ToJSON, CSV, YAML } = require('./assets')

var headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  'Access-Control-Max-Age': 12344345789,
}

var server = http.createServer(function (req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers)
    res.end()
    return
  }

  jsonParser(req, res, function (err) {
    if (err) throw err
    var routesParams = { req, res, headers, dir: __dirname, ToJSON }
    var questionParams = { req, res, headers, dir: __dirname, XML, ToJSON, CSV, YAML }
    team(routesParams)
    question(questionParams)
  })
})

server.listen(3000)


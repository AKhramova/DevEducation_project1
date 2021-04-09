var http = require('http')
var { json } = require('body-parser')
var jsonParser = json()

const { question } = require('./routes/question')
const { team } = require('./routes/team')

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
    var routesParams = { req, res, headers, dir: __dirname }
    team(routesParams)
    question(routesParams)
  })
})

server.listen(3000)


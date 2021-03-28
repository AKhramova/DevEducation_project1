var http = require('http')
var { writeToCsv, readCsv } = require('./assets/convertCsv')
var { write, read } = require('./assets/convertJson')


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

  if (req.method === "GET") {
    switch (req.url) {
      case '/team':
        read(res, __dirname + '/data/team.json', headers)
        break
      case '/questions?file=json':
        read(res, __dirname + '/data/questionsJSON.json', headers)
        break
      case '/questions?file=csv':
        readCsv(res, __dirname + '/data/questionsCSV.csv', headers)
        break
      case '/questions?file=xml':
        read(res, __dirname + '/data/questionsXML.xml', headers)
        break
      case '/questions?file=yaml':
        read(res, __dirname + '/data/questionsYAML.yaml', headers)
        break
      default: req.url
    }
  }

  if (req.method === 'POST') {
    switch (req.url) {
      case '/team':
        write(req, res, __dirname + '/data/team.json', headers)
        break
      case '/questions?file=json':
        write(req, res, __dirname + '/data/questionsJSON.json', headers)
        break
      case '/questions?file=csv':
        writeToCsv(req, res, __dirname + '/data/questionsCSV.csv', headers)
        break
      case '/questions?file=xml':
        write(req, res, __dirname + '/data/questionsXML.xml', headers)
        break
      case '/questions?file=yaml':
        write(req, res, __dirname + '/data/questionsYAML.yaml', headers)
        break
      default: req.url
    }
  }
})

server.listen(3000)


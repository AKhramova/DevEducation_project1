var http = require('http')
var { writeToCsv, readCsv } = require('./assets/convertCsv')
var { writeQuestions, writeUsers, read } = require('./assets/convertJson')
var { json } = require('body-parser')
var jsonParser = json()

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
        read(res, __dirname + '/data/questionsCSV.csv', headers)
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
    if (req.url === '/team') writeUsers(req, res, __dirname + '/data/team.json', headers)

    if (req.url === '/questions') {
      jsonParser(req, res, function (err) {
        if (err) throw err
        var formats = req.body.formats
        for (var i = 0; i < formats.length; i++) {
          if (formats[i] === 'csv') {
            writeQuestions(req, res, __dirname + '/data/questionsCSV.csv', headers)
          }
          if (formats[i] === 'json') {
            writeQuestions(req, res, __dirname + '/data/questionsJSON.json', headers)
          }
          if (formats[i] === 'xml') {
            writeQuestions(req, res, __dirname + '/data/questionsXML.xml', headers)
          }
        }
      })
    }
  }

  if (req.method === 'DELETE') {

  }
})

server.listen(3000)


var { json } = require('body-parser')
var jsonParser = json()
var fs = require('fs')


function read(res, file, headers) {
  fs.readFile(file,
    'utf-8',
    function (err, data) {
      if (err) throw err
      res.writeHead(200, headers)
      res.end(data)
    })
}

function writeQuestions(req, res, file, headers) {
  var data = JSON.parse(fs.readFileSync(file, 'utf-8'))
  data.unshift(req.body)

  fs.writeFile(file, JSON.stringify(data), () => {
    res.writeHead(200, headers)
    res.end(JSON.stringify({ message: "ok" }))
  })
}

function writeUsers(req, res, file, headers) {
  jsonParser(req, res, function (err) {
    if (err) throw err
    fs.writeFile(file, JSON.stringify(req.body), () => {
      res.writeHead(200, headers)
      res.end(JSON.stringify({ message: "ok" }))
    })
  })
}


module.exports = {
  read, writeUsers, writeQuestions
}
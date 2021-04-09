var createCsvWriter = require('csv-writer').createObjectCsvWriter
var csv = require('csv-parser')
var fs = require('fs')


function readCsv(res, path, headers) {
  var results = []
  fs.createReadStream(path)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.writeHead(200, headers)
      res.end(JSON.stringify(results))
    })
}


function writeToCsv(req, res, path, headers) {
  // jsonParser(req, res, function (err) {
  // if (err) throw err

  var header = []
  var records = []

  var headerElem = {}
  var recordElem = {}

  for (let i = 0; i < req.body.length; i++) {
    for (var key in req.body[i]) {
      headerElem.id = key
      headerElem.title = key
      recordElem[key] = req.body[i][key]
      header.push(headerElem)
      headerElem = {}
    }
    records.push(recordElem)
    recordElem = {}
  }

  var csvWriter = createCsvWriter({
    path: path,
    header: header
  })
  console.log(header)
  csvWriter.writeRecords(records)
    .then(() => {
      res.writeHead(200, headers)
      res.end(JSON.stringify({ message: "ok" }))
    })
  // })
}

module.exports = {
  readCsv, writeToCsv
}

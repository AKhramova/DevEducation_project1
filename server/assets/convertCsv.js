var createCsvWriter = require('csv-writer').createObjectCsvWriter
var csv = require('csv-parser')
var fs = require('fs')

var CSV = {
  read(res, file, headers, query) {
    var results = []
    fs.createReadStream(file)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        if (query) {
          if (query.get('theme') === 'all') {
            res.writeHead(200, headers)
            return res.end(JSON.stringify(results))
          }
          else if (query.get('theme')) {
            var filterData = results.filter(function (el) {
              return el.theme.toLowerCase() === query.get('theme')
            })
            res.writeHead(200, headers)
            return res.end(JSON.stringify(filterData))
          }
        }
      })
  },

  write(req, file) {
    var csvWriter = createCsvWriter({
      path: file,
      header: [
        { id: 'id', title: 'id' },
        { id: 'text', title: 'text' },
        { id: 'answer', title: 'answer' },
        { id: 'theme', title: 'theme' },
        { id: 'formats', title: 'formats' }
      ]
    })
    var results = []
    fs.createReadStream(file)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        results.unshift(req.body)
        csvWriter.writeRecords(results)
      })

  },

  delete(req, res, file, headers) {
    var csvWriter = createCsvWriter({
      path: file,
      header: [
        { id: 'id', title: 'id' },
        { id: 'text', title: 'text' },
        { id: 'answer', title: 'answer' },
        { id: 'theme', title: 'theme' },
        { id: 'formats', title: 'formats' }
      ]
    })
    var results = []
    fs.createReadStream(file)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        var afterDelete = results.filter(function (el) {
          return el.id.toString() !== req.body.id
        })
        if (afterDelete.length === 0) {
          fs.writeFileSync(file, '', 'utf-8')
          res.writeHead(200, headers)
          return res.end(JSON.stringify({ message: 'Ok' }))
        }
        csvWriter.writeRecords(afterDelete)
          .then(() => {
            res.writeHead(200, headers)
            return res.end(JSON.stringify({ message: 'Ok' }))
          })
      })
  }
}

module.exports = CSV
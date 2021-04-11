var XMLparser = require('fast-xml-parser');
var fs = require('fs');

var XML = {
  parser(file) {
    var data = fs.readFileSync(file, 'utf-8')
    return data ? XMLparser.parse(data).questions.question : []
  },

  convert(data) {
    if (data.length === 0) {
      return ''
    }
    var result = '<questions>'
    for (var i = 0; i < data.length; i++) {
      var wrapper = '<question>';
      for (var key in data[i]) {
        wrapper += `<${key}>${data[i][key]}</${key}>`
      }
      result += wrapper + '</question>';
    }
    result += '</questions>'
    return result
  },

  convert2Xml(req, file) {
    var readData = this.parser(file)

    Array.isArray(readData) ? readData : readData = [readData]

    readData.unshift(req.body)
    fs.writeFileSync(file, this.convert(readData))
  },

  convert2Json(res, file, headers, query) {
    var readData = this.parser(file)
    Array.isArray(readData) ? readData : readData = [readData]
    readData[0] === undefined ? readData = [] : readData
    if (query) {
      if (query.get('theme') === 'all') {
        res.writeHead(200, headers)
        return res.end(JSON.stringify(readData))
      }
      else if (query.get('theme')) {
        var filterData = readData.filter(function (el) {
          return el.theme.toLowerCase() === query.get('theme')
        })
        res.writeHead(200, headers)
        return res.end(JSON.stringify(filterData))
      }
    }
  },

  deleteQuestion(req, res, file, headers) {
    var readData = this.parser(file)
    Array.isArray(readData) ? readData : readData = [readData]

    var afterDelete = readData.filter(function (el) {
      return el.id.toString() !== req.body.id
    })
    fs.writeFileSync(file, this.convert(afterDelete))
    res.writeHead(200, headers)
    return res.end(JSON.stringify({ message: 'oK' }))
  }
}

module.exports = XML

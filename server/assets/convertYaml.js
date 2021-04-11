var yaml = require("json-to-pretty-yaml");
var yamlParser = require("js-yaml");
var fs = require('fs');
const { endResponse } = require("./convertJson");

var YAML = {
  read(file) {
    var yamlString = fs.readFileSync(file, 'utf-8')
    return yamlParser.load(yamlString)
  },

  write(data, file) {
    var result = yaml.stringify(data)
    return fs.writeFileSync(file, result, 'utf-8')
  },

  readQuestions(res, file, headers, query) {
    var data = this.read(file)
    if (data === undefined) {
      return this.endResponse(res, headers, [])
    }
    if (query) {
      if (query.get('theme') === 'all') {
        return this.endResponse(res, headers, data)
      }
      else if (query.get('theme')) {
        var filterData = data.filter(function (el) {
          return el.theme.toLowerCase() === query.get('theme')
        })
      }
      return this.endResponse(res, headers, filterData)
    }
  },

  writeQuestion(req, file) {
    var data = this.read(file)
    if (data === undefined) data = []
    data.unshift(req.body)

    this.write(data, file)
  },

  deleteQuestion(req, res, file, headers) {
    var data = this.read(file)

    var afterDelete = data.filter(function (el) {
      return el.id.toString() !== req.body.id
    })

    this.write(afterDelete, file)
    return this.endResponse(res, headers, { message: 'ok' })
  },

  endResponse(res, headers, message) {
    res.writeHead(200, headers)
    return res.end(JSON.stringify(message))
  }
}

module.exports = YAML
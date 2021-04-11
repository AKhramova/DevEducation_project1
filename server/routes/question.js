var url = require('url')
const { XML, ToJSON, CSV, YAML } = require('../assets')


function question({ req, res, headers, dir }) {
  var parseUrl = url.parse(req.url).query
  var query = new URLSearchParams(parseUrl)

  if (req.method === "GET") {
    switch (req.url) {
      case `/questions?file=json&theme=${query.get('theme')}`:
        ToJSON.read(res, `${dir}/data/questions.json`, headers, query)
        break
      case `/questions?file=csv&theme=${query.get('theme')}`:
        CSV.read(res, `${dir}/data/questions.csv`, headers, query)
        break
      case `/questions?file=xml&theme=${query.get('theme')}`:
        XML.convert2Json(res, `${dir}/data/questions.xml`, headers, query)
        break
      case `/questions?file=yaml&theme=${query.get('theme')}`:
        YAML.readQuestions(res, `${dir}/data/questions.yaml`, headers, query)
        break
      default: req.url
    }
  }

  if (req.url === '/questions' && req.method === 'POST') {
    var formats = req.body.formats
    for (var i = 0; i < formats.length; i++) {
      if (formats[i].toLowerCase() === 'xml') {
        XML.convert2Xml(req, `${dir}/data/questions.xml`)
      }
      else if (formats[i].toLowerCase() === 'csv') {
        CSV.write(req, `${dir}/data/questions.csv`)
      }
      else if (formats[i].toLowerCase() === 'yaml') {
        YAML.writeQuestion(req, `${dir}/data/questions.yaml`)
      }
      else if (formats[i].toLowerCase() === 'json') {
        ToJSON.writeQuestions(req, `${dir}/data/questions.json`)
      }
    }
    res.writeHead(200, headers)
    return res.end(JSON.stringify({ message: 'ok' }))
  }

  if (req.url === '/questions' && req.method === 'DELETE') {
    var format = req.body.format
    switch (format.toLowerCase()) {
      case 'json':
        ToJSON.deleteQuestion(req, res, dir + `/data/questions.${format}`, headers)
        break
      case 'xml':
        XML.deleteQuestion(req, res, `${dir}/data/questions.xml`, headers)
        break
      case 'csv':
        CSV.delete(req, res, `${dir}/data/questions.csv`, headers)
        break
      case 'yaml':
        YAML.deleteQuestion(req, res, `${dir}/data/questions.yaml`, headers)
        break
      default:
        res.writeHead(200, headers)
        res.end(JSON.stringify({ message: 'Введите нужный формат' }))
    }
  }
}

module.exports = { question }
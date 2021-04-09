var { writeQuestions, read, deleteQuestion } = require('../assets/convertJson')
var url = require('url')
function question({ req, res, headers, dir }) {
  var parseUrl = url.parse(req.url).query
  var query = new URLSearchParams(parseUrl)

  if (req.method === "GET") {
    switch (req.url) {
      case `/questions?file=json&theme=${query.get('theme')}`:
        read(res, dir + '/data/questions.json', headers, query)
        break
      case `/questions?file=csv&theme=${query.get('theme')}`:
        read(res, dir + '/data/questions.csv', headers, query)
        break
      case `/questions?file=xml&theme=${query.get('theme')}`:
        read(res, dir + '/data/questions.xml', headers, query)
        break
      case `/questions?file=yaml&theme=${query.get('theme')}`:
        read(res, dir + '/data/questions.yaml', headers, query)
        break
      default: req.url
    }
  }

  if (req.url === '/questions' && req.method === 'POST') {
    if (req.url === '/questions') {
      var formats = req.body.formats
      for (var i = 0; i < formats.length; i++) {
        writeQuestions(req, res, dir + `/data/questions.${formats[i]}`, headers)
      }
    }
  }

  if (req.url === '/questions' && req.method === 'DELETE') {
    if (req.url === '/questions') {
      var format = req.body.format
      deleteQuestion(req, res, dir + `/data/questions.${format}`, headers)
    }
  }
}

module.exports = { question }
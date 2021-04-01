var { writeQuestions, read, deleteQuestion } = require('../assets/convertJson')

function question({ req, res, headers, dir }) {
  if (req.method === "GET") {
    switch (req.url) {
      case '/questions?file=json':
        read(res, dir + '/data/questions.json', headers)
        break
      case '/questions?file=csv':
        read(res, dir + '/data/questions.csv', headers)
        break
      case '/questions?file=xml':
        read(res, dir + '/data/questions.xml', headers)
        break
      case '/questions?file=yaml':
        read(res, dir + '/data/questions.yaml', headers)
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
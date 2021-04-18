var url = require('url')

function question({ req, res, headers, dir, XML, ToJSON, CSV, YAML, questions }) {
  var parseUrl = url.parse(req.url).query,
    query = new URLSearchParams(parseUrl),
    params = { req, res, dir, headers },
    parsers = { XML, ToJSON, CSV, YAML }
  questions.getQuestions({ ...params, query }, parsers)
  questions.postQuestions(params, parsers)
  questions.deleteQuestions(params, parsers)
}

module.exports = { question }
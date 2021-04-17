var url = require('url')

var deleteQuestions = require('./delete')
var getQuestions = require('./get')
var postQuestions = require('./post')

function question({ req, res, headers, dir, XML, ToJSON, CSV, YAML }) {
  var parseUrl = url.parse(req.url).query,
    query = new URLSearchParams(parseUrl),
    params = { req, res, dir, headers },
    parsers = { XML, ToJSON, CSV, YAML }
  getQuestions({ ...params, query }, parsers)
  postQuestions(params, parsers)
  deleteQuestions(params, parsers)
}

module.exports = { question }
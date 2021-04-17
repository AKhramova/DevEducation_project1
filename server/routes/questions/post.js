function postQuestions({ req, res, dir, headers }, { ToJSON, CSV, XML, YAML }) {
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
}

module.exports = postQuestions
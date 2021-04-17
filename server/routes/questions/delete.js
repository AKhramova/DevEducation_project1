function deleteQuestions({ req, res, dir, headers }, { ToJSON, CSV, XML, YAML }) {
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

module.exports = deleteQuestions
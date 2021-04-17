function getQuestions({ req, res, dir, headers, query }, { ToJSON, CSV, XML, YAML }) {
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
}

module.exports = getQuestions
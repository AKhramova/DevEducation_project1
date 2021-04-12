var CSV = require('./convertCsv'),
  ToJSON = require('./convertJson'),
  XML = require('./convertXml'),
  YAML = require('./convertYaml')

module.exports = {
  ToJSON, XML, CSV, YAML
}
var questions = require("../questions")
var getQuestions = questions.getQuestions

var headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  'Access-Control-Max-Age': 12344345789,
}
var query = {
  get: function (string) {
    if (string === 'theme') return 'all'
  }
}
var res = {
  end: jest.fn(),
  writeHead: jest.fn()
}
var req = {
  body: {
    "id": 1618565872229,
    "theme": "html"
  },
  method: "GET",
  url: `/questions?file=json&theme=all`
}

var parsers = {
  ToJSON: {
    read: jest.fn()
  },
  CSV: {
    read: jest.fn()
  },
  XML: {
    convert2Json: jest.fn()
  },
  YAML: {
    readQuestions: jest.fn()
  }
},
  params = { req, res, dir: '', headers, query }
describe('getQuestions', function () {
  it('should be defined', function () {
    expect(getQuestions).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof getQuestions).toBe('function')
  })
  it('should be a file JSON', function () {
    expect(getQuestions(params, parsers)).toBe()
  })
  it('should be a file JSON read call', function () {
    getQuestions(params, parsers)
    expect(parsers.ToJSON.read).toHaveBeenCalled()
  })
  it('should be a file CSV', function () {
    req.url = `/questions?file=csv&theme=all`
    expect(getQuestions(params, parsers)).toBe()
  })
  it('should be a file CSV read call', function () {
    getQuestions(params, parsers)
    expect(parsers.CSV.read).toHaveBeenCalled()
  })
  it('should be a file XML', function () {
    req.url = `/questions?file=xml&theme=all`
    expect(getQuestions(params, parsers)).toBe()
  })
  it('should be a file XML read call', function () {
    getQuestions(params, parsers)
    expect(parsers.XML.convert2Json).toHaveBeenCalled()
  })
  it('should be a file YAML', function () {
    req.url = `/questions?file=yaml&theme=all`
    expect(getQuestions(params, parsers)).toBe()
  })
  it('should be a file YAML read call', function () {
    getQuestions(params, parsers)
    expect(parsers.YAML.readQuestions).toHaveBeenCalled()
  })
  it('should be a ivalid file', function () {
    req.url = `/questions?file=exe&theme=all`
    expect(getQuestions(params, parsers)).toBe()
  })
})
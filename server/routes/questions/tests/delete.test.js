var questions = require("../questions")
var deleteQuestions = questions.deleteQuestions

var headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  'Access-Control-Max-Age': 12344345789,
}

var res = {
  end: jest.fn(),
  writeHead: jest.fn()
}
var req = {
  body: {
    format: 'json',
  },
  method: "DELETE",
  url: `/questions`
}

var parsers = {
  ToJSON: {
    deleteQuestion: jest.fn()
  },
  CSV: {
    delete: jest.fn()
  },
  XML: {
    deleteQuestion: jest.fn()
  },
  YAML: {
    deleteQuestion: jest.fn()
  }
},
  params = { req, res, dir: '', headers }
describe('deleteQuestions', function () {
  it('should be defined', function () {
    expect(deleteQuestions).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof deleteQuestions).toBe('function')
  })

  it('should be json format', function () {
    expect(deleteQuestions(params, parsers)).toBe()
  })
  it('should be a file JSON write call', function () {
    deleteQuestions(params, parsers)
    expect(parsers.ToJSON.deleteQuestion).toHaveBeenCalled()
  })

  it('should be CSV format', function () {
    req.body.format = 'csv'
    expect(deleteQuestions(params, parsers)).toBe()
  })
  it('should be a file CSV write call', function () {
    deleteQuestions(params, parsers)
    expect(parsers.CSV.delete).toHaveBeenCalled()
  })

  it('should be XML format', function () {
    req.body.format = 'xml'
    expect(deleteQuestions(params, parsers)).toBe()
  })
  it('should be a file XML write call', function () {
    deleteQuestions(params, parsers)
    expect(parsers.XML.deleteQuestion).toHaveBeenCalled()
  })

  it('should be YAML format', function () {
    req.body.format = 'yaml'
    expect(deleteQuestions(params, parsers)).toBe()
  })
  it('should be a file YAML write call', function () {
    deleteQuestions(params, parsers)
    expect(parsers.YAML.deleteQuestion).toHaveBeenCalled()
  })

  it('should be invalid format', function () {
    req.body.format = 'exe'
    expect(deleteQuestions(params, parsers)).toBe()
  })
})
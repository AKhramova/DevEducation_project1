var questions = require("../questions")
var postQuestions = questions.postQuestions

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
    formats: ['json'],
  },
  method: "POST",
  url: `/questions`
}

var parsers = {
  ToJSON: {
    writeQuestions: jest.fn()
  },
  CSV: {
    write: jest.fn()
  },
  XML: {
    convert2Xml: jest.fn()
  },
  YAML: {
    writeQuestion: jest.fn()
  }
},
  params = { req, res, dir: '', headers }
describe('postQuestions', function () {
  it('should be defined', function () {
    expect(postQuestions).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof postQuestions).toBe('function')
  })

  it('should be json format', function () {
    expect(postQuestions(params, parsers)).toBe()
  })
  it('should be a file JSON write call', function () {
    postQuestions(params, parsers)
    expect(parsers.ToJSON.writeQuestions).toHaveBeenCalled()
  })

  it('should be CSV format', function () {
    req.body.formats = ['csv']
    expect(postQuestions(params, parsers)).toBe()
  })
  it('should be a file CSV write call', function () {
    postQuestions(params, parsers)
    expect(parsers.CSV.write).toHaveBeenCalled()
  })

  it('should be XML format', function () {
    req.body.formats = ['xml']
    expect(postQuestions(params, parsers)).toBe()
  })
  it('should be a file XML write call', function () {
    postQuestions(params, parsers)
    expect(parsers.XML.convert2Xml).toHaveBeenCalled()
  })

  it('should be YAML format', function () {
    req.body.formats = ['yaml']
    expect(postQuestions(params, parsers)).toBe()
  })
  it('should be a file YAML write call', function () {
    postQuestions(params, parsers)
    expect(parsers.YAML.writeQuestion).toHaveBeenCalled()
  })
})
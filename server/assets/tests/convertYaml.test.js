var YAML = require("../convertYaml")

jest.mock('fs')
var headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  'Access-Control-Max-Age': 12344345789,
}
describe('YAML.read', function () {
  var readData = "[{\"id\":1618565872229,\"text\":\"sfsdf\",\"answer\":\"true\",\"theme\":\"HTML\",\"formats\":[\"JSON\"]}]"
  beforeEach(() => {
    var fs = require('fs')

    fs.readFileSync = function (file) {
      return readData
    }
  })
  it('should be defined', function () {
    expect(YAML.read).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof YAML.read).toBe('function')
  })
  it('should be a function', function () {
    var fs = require('fs')
    var data = [{ "id": 1618565872229, "text": "sfsdf", "answer": "true", "theme": "HTML", "formats": ["JSON"] }]

    fs.readFileSync = function (file) {
      return readData
    }
    expect(YAML.read('')).toStrictEqual(data)
  })
  it('should be a valid', function () {
    var data = [{ "id": 1618565872229, "text": "sfsdf", "answer": "true", "theme": "HTML", "formats": ["JSON"] }]
    expect(YAML.read('')).toStrictEqual(data)
  })
  it('should be a invalid', function () {
    var data = `[{ "id": 1618565872229, "text": "sfsdf", "answer": "true", "theme": "HTML", "formats": ["JSON"] }]`
    expect(YAML.read('')).not.toStrictEqual(data)
  })
})

describe('YAML.write', function () {
  beforeEach(() => {
    var fs = require('fs')
    fs.writeFileSync = jest.fn()
  })
  it('should be defined', function () {
    expect(YAML.write).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof YAML.write).toBe('function')
  })
  it('should be a data', function () {
    expect(YAML.write({}, '')).toBe()
  })
})

describe('YAML.readQuestions', function () {
  var query = {
    get: function (string) {
      if (string === 'theme') return 'all'
    }
  }
  var res = {
    end: jest.fn(),
    writeHead: jest.fn()
  }
  it('should be defined', function () {
    expect(YAML.readQuestions).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof YAML.readQuestions).toBe('function')
  })
  it('should be a query === all', function () {
    expect(YAML.readQuestions(res, '', headers, query)).toBe()
  })
  it('should be a query === html', function () {
    query.get = function (string) {
      if (string === 'theme') return 'html'
    }
    expect(YAML.readQuestions(res, '', headers, query)).toBe()
  })
  it('should be a data === undefined', function () {
    var spy = jest.spyOn(YAML, 'read')
    var mock = jest.fn()
    YAML.read = mock.mockReturnValue(undefined)
    expect(YAML.readQuestions(res, '', headers, query)).toBe()
    spy.mockRestore()
  })
})

describe('YAML.writeQuestion', function () {
  var req = {
    body: {
      "id": 1618565872229,
      "theme": "html"
    }
  }
  it('should be defined', function () {
    expect(YAML.writeQuestion).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof YAML.writeQuestion).toBe('function')
  })
  it('should be a success', function () {
    expect(YAML.writeQuestion(req, '')).toBe()
  })
  it('should be a data === undefined', function () {
    var spy = jest.spyOn(YAML, 'read')
    var mock = jest.fn()
    YAML.read = mock.mockReturnValue(undefined)
    expect(YAML.writeQuestion(req, '')).toBe()
    spy.mockRestore()
  })
})

describe('YAML.deleteQuestion', function () {
  var req = {
    body: {
      "id": 1618565872229,
      "theme": "html"
    }
  }
  var res = {
    end: jest.fn(),
    writeHead: jest.fn()
  }
  it('should be defined', function () {
    expect(YAML.deleteQuestion).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof YAML.deleteQuestion).toBe('function')
  })
  it('should be a function', function () {
    expect(YAML.deleteQuestion(req, res, '', headers)).toBe()
  })
})
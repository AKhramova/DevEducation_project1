var ToJSON = require('../convertJson')



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
jest.mock('fs')

var res = {
  end: jest.fn(),
  writeHead: jest.fn()
}

var req = {
  body: {
    "id": 1618565872229,
    "theme": "html"
  }
}

describe('toJSON.read', function () {
  beforeEach(() => {
    var fs = require('fs')
    fs.readFileSync = function (file) {
      return `[{"id":1618565872229,"text":"sfsdf","answer":"true","theme":"HTML","formats":["JSON"]}]`
    }
  })
  it('should be defined', function () {
    expect(ToJSON.read).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof ToJSON.read).toBe('function')
  })

  it('should be a all themes', function () {
    expect(ToJSON.read(res, 'a', headers, query)).toBe()
  })

  it('should be a theme', function () {
    var res = {
      end: jest.fn(),
      writeHead: jest.fn()
    }
    query.get = function (string) {
      if (string === 'theme') return 'html'
    }
    expect(ToJSON.read(res, '', headers, query)).toBe()
  })

  it('should be a developers', function () {
    expect(ToJSON.read(res, '', headers)).toBe()
  })
})

describe('toJSON.endResponse', function () {
  it('should be defined', function () {
    expect(ToJSON.endResponse).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof ToJSON.endResponse).toBe('function')
  })

  it('should be a end responce', function () {
    expect(ToJSON.endResponse(res, headers, 'ex')).toBe()
  })
})

describe('toJSON.writeQuestions', function () {
  beforeEach(() => {
    var fs = require('fs')
    fs.readFileSync = function (file) {
      return `[{"id":1618565872229,"text":"sfsdf","answer":"true","theme":"HTML","formats":["JSON"]}]`
    }
    fs.writeFileSync = jest.fn()
  })
  it('should be defined', function () {
    expect(ToJSON.writeQuestions).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof ToJSON.writeQuestions).toBe('function')
  })
  it('should be a write', function () {
    expect(ToJSON.writeQuestions(req, '')).toBe()
  })
  it('should be a invalid arg', function () {
    req.body = undefined
    expect(ToJSON.writeQuestions(req, '')).toBe(false)
  })
})

describe('toJSON.deleteQuestion', function () {

  beforeEach(() => {
    var fs = require('fs')
    fs.readFileSync = function (file, code) {
      return `[{"id":1618565872229,"text":"sfsdf","answer":"true","theme":"HTML","formats":["JSON"]}]`
    }
    fs.writeFileSync = jest.fn()
  })
  it('should be defined', function () {
    expect(ToJSON.deleteQuestion).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof ToJSON.deleteQuestion).toBe('function')
  })

  it('should be a req.body !== object', function () {
    req.body = undefined
    expect(ToJSON.deleteQuestion(req, res, '', headers)).toBe()
  })

  it('should be a req.body == array', function () {
    req.body = []
    expect(ToJSON.deleteQuestion(req, res, '', headers)).toBe()
  })

  it('should be a valid args', function () {
    var req = {
      body: {
        "id": 1618565872229,
        "theme": "html"
      }
    }
    expect(ToJSON.deleteQuestion(req, res, '', headers)).toBe()
  })
})

describe('toJSON.writeUsers', function () {
  it('should be defined', function () {
    expect(ToJSON.writeUsers).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof ToJSON.writeUsers).toBe('function')
  })

  it('should be a invalid arg', function () {
    var res = {
      end: jest.fn(),
      writeHead: jest.fn()
    }
    var req = {
      body: {
        "id": 1618565872229,
        "theme": "html"
      }
    }
    expect(ToJSON.writeUsers(req, res, '', headers)).toBe()
  })
  it('should be a valid arg', function () {
    var res = {
      end: jest.fn(),
      writeHead: jest.fn()
    }
    var req = {
      body: [{
        "id": 1618565872229,
        "theme": "html"
      }]
    }
    expect(ToJSON.writeUsers(req, res, '', headers)).toBe()
  })
})
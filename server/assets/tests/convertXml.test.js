var XML = require("../convertXml")

jest.mock('fs')
var headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  'Access-Control-Max-Age': 12344345789,
}
describe('XML.parser', function () {
  var readData = "<questions><question><id>1618659859669</id><text>sad</text><answer>true</answer><theme>HTML</theme><formats>XML</formats></question></questions>"
  beforeEach(() => {
    var fs = require('fs')

    fs.readFileSync = function (file) {
      return readData
    }
  })
  it('should be defined', function () {
    expect(XML.parser).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof XML.parser).toBe('function')
  })
  it('should be a data defined', function () {
    var fs = require('fs')
    var data = { "answer": true, "formats": "XML", "id": 1618659859669, "text": "sad", "theme": "HTML" }

    fs.readFileSync = function (file) {
      return readData
    }
    expect(XML.parser('')).toStrictEqual(data)
  })
  it('should be an empty data', function () {
    var fs = require('fs')
    var data = []
    readData = ''
    fs.readFileSync = function (file) {
      return readData
    }
    expect(XML.parser('')).toStrictEqual(data)
  })
})


describe('XML.convert', function () {
  it('should be defined', function () {
    expect(XML.convert).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof XML.convert).toBe('function')
  })
  it('should be a valid data', function () {
    var data = [{ a: 1, b: 2 }]
    expect(XML.convert(data)).toBe("<questions><question><a>1</a><b>2</b></question></questions>")
  })
  it('should not to be a valid data', function () {
    var data = [{ a: 1, b: 2 }]
    expect(XML.convert(data)).not.toBe("<questions></questions>")
  })
  it('should be an emptey ata', function () {
    var data = []
    expect(XML.convert(data)).toBe("")
  })
  it('should not to be an empty data', function () {
    var data = []
    expect(XML.convert(data)).not.toBe("<questions></questions>")
  })
})

describe('XML.convert2Xml', function () {

  it('should be defined', function () {
    expect(XML.convert2Xml).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof XML.convert2Xml).toBe('function')
  })

  it('should be a read file', function () {
    var fs = require('fs')
    var readData = "<questions><question><id>1618659859669</id><text>sad</text><answer>true</answer><theme>HTML</theme><formats>XML</formats></question></questions>"
    fs.readFileSync = function (file) {
      return readData
    }
    var req = {
      body: [{
        "id": 1618565872229,
        "theme": "html"
      }]
    }
    expect(XML.convert2Xml(req, '')).toBe()
  })
  it('should be an empty file', function () {
    var fs = require('fs')
    var readData = ""
    fs.readFileSync = function (file) {
      return readData
    }
    var req = {
      body: {
        "id": 1618565872229,
        "theme": "html"
      }
    }
    expect(XML.convert2Xml(req, '')).toBe()
  })
})

describe('XML.convert2Xml', function () {

  it('should be defined', function () {
    expect(XML.convert2Xml).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof XML.convert2Xml).toBe('function')
  })

  it('should be a read file', function () {
    var fs = require('fs')
    var readData = "<questions><question><id>1618659859669</id><text>sad</text><answer>true</answer><theme>HTML</theme><formats>XML</formats></question></questions>"
    fs.readFileSync = function (file) {
      return readData
    }
    var req = {
      body: [{
        "id": 1618565872229,
        "theme": "html"
      }]
    }
    expect(XML.convert2Xml(req, '')).toBe()
  })
  it('should be an empty file', function () {
    var fs = require('fs')
    var readData = ""
    fs.readFileSync = function (file) {
      return readData
    }
    var req = {
      body: {
        "id": 1618565872229,
        "theme": "html"
      }
    }
    expect(XML.convert2Xml(req, '')).toBe()
  })
})

describe('XML.convert2Json', function () {
  it('should be defined', function () {
    expect(XML.convert2Json).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof XML.convert2Json).toBe('function')
  })
  it('should be a theme === all', function () {
    var fs = require('fs')
    var readData = "<questions><question><id>1618659859669</id><text>sad</text><answer>true</answer><theme>HTML</theme><formats>XML</formats></question></questions>"
    fs.readFileSync = function (file) {
      return readData
    }
    var res = {
      end: jest.fn(),
      writeHead: jest.fn()
    }
    var query = {
      get: function (string) {
        if (string === 'theme') return 'all'
      }
    }
    expect(XML.convert2Json(res, '', headers, query)).toBe()
  })

  it('should be a theme === html', function () {
    var fs = require('fs')
    var readData = "<questions><question><id>1618659859669</id><text>sad</text><answer>true</answer><theme>HTML</theme><formats>XML</formats></question></questions>"
    fs.readFileSync = function (file) {
      return readData
    }
    var res = {
      end: jest.fn(),
      writeHead: jest.fn()
    }
    var query = {
      get: function (string) {
        if (string === 'theme') return 'html'
      }
    }
    expect(XML.convert2Json(res, '', headers, query)).toBe()
  })

  it('should be a read data empty', function () {
    var fs = require('fs')
    var readData = "<questions></questions>"
    fs.readFileSync = function (file) {
      return readData
    }
    var res = {
      end: jest.fn(),
      writeHead: jest.fn()
    }
    var query = {
      get: function (string) {
        if (string === 'theme') return 'html'
      }
    }
    expect(XML.convert2Json(res, '', headers, query)).toBe()
  })
  it('should be a read data empty', function () {
    var fs = require('fs')
    var readData = ""
    fs.readFileSync = function (file) {
      return readData
    }
    var res = {
      end: jest.fn(),
      writeHead: jest.fn()
    }
    var query = {
      get: function (string) {
        if (string === 'theme') return 'html'
      }
    }
    expect(XML.convert2Json(res, '', headers, query)).toBe()
  })
})

describe('XML.deleteQuestion', function () {
  it('should be defined', function () {
    expect(XML.deleteQuestion).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof XML.deleteQuestion).toBe('function')
  })
  it('should be a data', function () {
    var fs = require('fs')
    var readData = "<questions><question><id>1618565872229</id><text>sad</text><answer>true</answer><theme>HTML</theme><formats>XML</formats></question></questions>"
    fs.readFileSync = function (file) {
      return readData
    }
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
    expect(XML.deleteQuestion(req, res, '', headers)).toBe()
  })

  it('should be an empty data', function () {
    var fs = require('fs')
    var readData = ""
    fs.readFileSync = function (file) {
      return readData
    }
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
    expect(XML.deleteQuestion(req, res, '', headers)).toBe()
  })
})
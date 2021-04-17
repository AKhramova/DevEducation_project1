var { team } = require("./team")

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
  method: "GET",
  url: `/team`
},
  ToJSON = {
    writeUsers: jest.fn(),
    read: jest.fn(),
  },
  params = { req, res, dir: '', headers, ToJSON }

describe('team', function () {
  it('should be defined', function () {
    expect(team).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof team).toBe('function')
  })
  it('should be get', function () {
    expect(team(params)).toBe()
  })
  it('should be read called', function () {
    team(params)
    expect(ToJSON.read).toHaveBeenCalled()
  })
  it('should be post', function () {
    req.method = 'POST'
    expect(team(params)).toBe()
  })
  it('should be write called', function () {
    team(params)
    expect(ToJSON.writeUsers).toHaveBeenCalled()
  })
})
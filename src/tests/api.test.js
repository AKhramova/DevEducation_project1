import { api } from "../modules/questions/support";
var open, send, onload, onerror, setRequestHeader, addEventListener
function xmlHttpMock(status) {
  open = jest.fn()
  send = jest.fn().mockImplementation(function () {
    this.onload()
    if (status < 200 || status >= 300) {
      this.onerror()
    }
    addEventListener = jest.fn().mockImplementation(function () { })
    setRequestHeader = jest.fn()
  })
  function xmlHttpClassmock() {
    return {
      addEventListener,
      setRequestHeader,
      onload,
      onerror,
      open,
      send,
      status
    }
  }
  window.XMLHttpRequest = jest.fn().mockImplementation(xmlHttpClassmock)
}
document.body.classList = {
  add: jest.fn(),
  remove: jest.fn()
}
describe('api.getRequest', function () {
  it('should be defined', function () {
    expect(api.getRequest).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof api.getRequest).toBe('function')
  })
  it('should be a function', function () {
    xmlHttpMock(400)
    return api.getRequest('').catch(() => {
      expect(open).toBeCalledWith("GET", "http://localhost:3000", true)
    })
  })
  it('should be a function', function () {
    xmlHttpMock(201)
    return api.getRequest('').catch(() => {
      expect(open).toBeCalledWith("GET", "http://localhost:3000", true)
    })
  })

})

describe('api.postRequest', function () {
  it('should be defined', function () {
    expect(api.postAndDeleteRequest).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof api.postAndDeleteRequest).toBe('function')
  })
  it('should be a function', function () {
    xmlHttpMock(400)
    return api.postAndDeleteRequest('').catch(() => {
      expect(open).toBeCalledWith("POST", "http://localhost:3000", true)
    })
  })

})
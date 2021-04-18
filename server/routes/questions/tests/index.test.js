var { question } = require('../index')
describe('postQuestions', function () {
  it('should be defined', function () {
    expect(question).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof question).toBe('function')
  })

  it('should be a function', function () {
    var params = {}
    params.req = {
      url: ''
    }
    params.res = jest.fn()
    params.headers = ''
    params.dir = ''
    params.XML = jest.fn()
    params.ToJSON = jest.fn()
    params.CSV = jest.fn()
    params.YAML = jest.fn()
    params.questions = {
      getQuestions: jest.fn(),
      postQuestions: jest.fn(),
      deleteQuestions: jest.fn(),
    }

    expect(question(params)).toBe()
  })
})
import filter from '../modules/filter'

describe('filter', function () {
  it('should be defined', function () {
    expect(filter).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof filter).toBe('function')
  })
  var spy = jest.spyOn(YAML, 'read')
  var mock = jest.fn()
  YAML.read = mock.mockReturnValue(undefined)
  expect(YAML.readQuestions(res, '', headers, query)).toBe()
  spy.mockRestore()
  it('should be a !file_filter', function () {
    var spy = jest.spyOn(localStorage, 'getItem')
    var mock = jest.fn()
    localStorage.getItem = mock.mockReturnValue(undefined)
    expect(filter()).toBe()
    spy.mockRestore()
  })
})
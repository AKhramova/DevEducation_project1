import filter, { changeHandle } from "../modules/questions/filter"

describe('filter', function () {
  it('should be defined', function () {
    expect(filter).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof filter).toBe('function')
  })
  it('should be a !file_filter', function () {
    document.querySelector = function (string) {
      return { value: '', addEventListener: jest.fn() }
    }
    expect(filter()).toBe()
  })
})

describe('filter', function () {
  it('should be defined', function () {
    expect(changeHandle).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof changeHandle).toBe('function')
  })
})


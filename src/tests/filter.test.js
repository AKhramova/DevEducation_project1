import filter from '../modules/filter'

describe('filter', function () {
  it('should be defined', function () {
    expect(filter).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof filter).toBe('function')
  })

})
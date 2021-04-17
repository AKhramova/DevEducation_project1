var CSV = require('../convertCsv')

describe('CSV.read', function () {
  it('should be defined', function () {
    expect(CSV.read).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof CSV.read).toBe('function')
  })
})
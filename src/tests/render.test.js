import render from "../modules/questions/render/render";

describe('render', function () {
  it('should be defined', function () {
    expect(render).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof render).toBe('function')
  })
})
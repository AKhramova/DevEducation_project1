import { supportModal } from "../modules/questions/support";

describe('supportModal.closePopup', function () {
  it('should be defined', function () {
    expect(supportModal.closePopup).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof supportModal.closePopup).toBe('function')
  })
  it('should be a function', function () {
    var el = {
      classList: {
        add: jest.fn()
      }
    }
    expect(supportModal.closePopup(el)).toBe()
  })
})

describe('supportModal.openPopup', function () {
  it('should be defined', function () {
    expect(supportModal.openPopup).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof supportModal.openPopup).toBe('function')
  })
  it('should be a function', function () {
    var el = {
      classList: {
        remove: jest.fn()
      }
    }
    expect(supportModal.openPopup(el)).toBe()
  })
})

describe('supportModal.openPopup', function () {
  it('should be defined', function () {
    expect(supportModal.closePopup).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof supportModal.closePopup).toBe('function')
  })
  it('should be a function', function () {
    var el = {
      classList: {
        remove: jest.fn()
      }
    }
    expect(supportModal.openPopup(el)).toBe()
  })
})
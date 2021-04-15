import homeModule from '../modules/home-page-request';

describe('homeModule', function() {
    it('should be defined', function() {
        expect(homeModule).toBeDefined();
    })
    it('should be function', function() {
        expect(typeof homeModule).toBe('function')
    })
})
import Kernel from "@app/Kernel"

describe('server', () => {
  describe('bootstraping', () => {
    it('should have implemented method bootstrap', () => {
      expect(new Kernel().bootstrap).toBeDefined()
    })
  })
})
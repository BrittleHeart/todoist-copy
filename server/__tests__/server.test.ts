import Kernel from '@app/Kernel'

jest.mock('@app/Kernel')

describe('server', () => {
  describe('Kernel', () => {
    it('should have implemented method bootstrap', () => {
      expect(new Kernel().bootstrap).toBeDefined()
    })

    it('should be called only one time', () => {
      const application = new Kernel()
      
      expect(application).toBeInstanceOf(Kernel)
      expect(Kernel).toBeCalledTimes(1)
    })
  })
})

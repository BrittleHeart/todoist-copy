import 'reflect-metadata'
import GlobalMiddleware from '@app/http/middlewares/GlobalMiddleware'
import Middleware from '@app/http/middlewares/Middleware'

const globalMiddleware = new GlobalMiddleware()

describe('globals', () => {
  describe('Middlewares', () => {
    it('should have public method called handle', () => {
      expect(globalMiddleware.handle).toBeDefined()
    })

    it('should be an instance of abstract class Middleware', () => {
      expect(globalMiddleware).toBeInstanceOf(Middleware)
    })
  })
})

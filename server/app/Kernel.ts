import { InversifyExpressServer } from 'inversify-express-utils'
import { Container, inject, injectable } from 'inversify'
import { Application } from 'express'
import GlobalMiddleware from './http/middlewares/GlobalMiddleware'

export const container: Container = new Container
@injectable()
export default class Kernel {
  public readonly app: InversifyExpressServer | Application

  constructor(@inject(GlobalMiddleware) protected readonly globalMiddlewares: GlobalMiddleware) {
    this.app = new InversifyExpressServer(container)
    this.globalMiddlewares = new GlobalMiddleware()
    this.app = this.app.build()
    globalMiddlewares.handle(this.app)
  }
  
  public async run() {
    // @ts-ignore
    this.app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))
  }
}

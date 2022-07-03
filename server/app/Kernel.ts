import { InversifyExpressServer } from 'inversify-express-utils'
import { Container, inject, injectable } from 'inversify'
import { Application } from 'express'
import GlobalMiddleware from './http/middlewares/GlobalMiddleware'
import DatabaseServiceProvider from './providers/DatabaseServiceProvider'
import { Connection } from 'mysql2'

export const container: Container = new Container()
@injectable()
export default class Kernel {
  private _config: object | Array<any> | any = {}

  private readonly _database: Connection

  public readonly app: InversifyExpressServer | Application

  constructor(@inject(GlobalMiddleware) protected readonly globalMiddlewares: GlobalMiddleware) {
    this.loadConfig()

    this.app = new InversifyExpressServer(container)
    this.app = this.app.build()

    const database = new DatabaseServiceProvider(this._config.default)
    this._database = database.provide()

    globalMiddlewares.handle(this.app)
  }

  public async run() {
    // @ts-ignore
    this.app.listen(3000, () => console.log('Server is listening on http://localhost:3000'))
  }

  private loadConfig() {
    this._config = require('@config/app')
  }
}

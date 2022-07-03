import Middleware from './Middleware'
import cors from 'cors'
import morgan from 'morgan'
import { NextFunction, json, urlencoded, Application } from 'express'
import { injectable } from 'inversify'

const { NODE_ENV } = process.env

@injectable()
export default class GlobalMiddleware extends Middleware<Application> {
  private readonly _globals: Array<any>

  constructor() {
    super()
    this._globals = [
      urlencoded({ extended: false }),
      json(),
      cors(),
      NODE_ENV === 'production' ? morgan('tiny') : morgan('dev'),
    ]
  }

  // @ts-ignore
  public override handle(context: Application, next?: NextFunction): void {
    context.use(...this._globals)
    if (next) next()
  }
}

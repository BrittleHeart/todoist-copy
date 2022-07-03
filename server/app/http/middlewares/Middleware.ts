import { NextFunction } from 'express'
import { injectable } from 'inversify'
@injectable()
export default abstract class Middleware<T> {
  // eslint-disable-next-line
  protected abstract handle(context: T, next?: NextFunction): void
  // eslint-disable-next-line
  protected abstract handle(req?: Request, res?: Response, next?: NextFunction): void | T
}

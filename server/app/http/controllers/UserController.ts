/* eslint-disable-next-line */
import { controller, httpGet, response } from 'inversify-express-utils'
import { Response } from 'express'

@controller('/users')
export default class UserController {
  @httpGet('/')
  public async index(@response() response: Response) {
    return response.status(200).json({message: '', users: []})
  }
}

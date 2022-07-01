import { IApplication } from './IApplication'
export default class Kernel implements IApplication {
  readonly _port: number
  readonly _host: string

  constructor(private readonly port?: number, private readonly host?: string) {
    this._port = port ? port : 3000
    this._host = host ? host : 'localhost'
  }

  public async bootstrap() {
    console.log('hehe')
  }
}

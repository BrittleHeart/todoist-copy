// eslint-disable-next-line
import mysql, { createConnection, Connection } from 'mysql2'
import ServiceProvider from './ServiceProvider'

export default class DatabaseServiceProvider extends ServiceProvider<Connection> {
  private readonly _host: string
  private readonly _user: string
  private readonly _passwd: string
  private readonly _db: string
  private readonly _port: number

  constructor(config: Connection) {
    super(config)

    this._host = this.config['mysql']['host']
    this._user = this.config['mysql']['user']
    this._passwd = this.config['mysql']['password']
    this._db = this.config['mysql']['database']
    this._port = parseInt(this.config['mysql']['port'])
  }

  /**
   * Provides basic functionality for database connection
   *
   */
  public provide(): mysql.Connection {
    return createConnection({
      host: this._host,
      user: this._user,
      password: this._passwd,
      port: this._port,
      database: this._db,
    })
  }
}

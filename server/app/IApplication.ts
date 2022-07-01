export interface IApplication {
  _port: number,
  _host: string,
  /* eslint-disable */
  bootstrap: (port: number, host?: string) => Promise<void>
}
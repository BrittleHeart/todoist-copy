export default abstract class ServiceProvider<T> {
  protected config: Array<object> | object | any

  constructor(config: T) {
    this.config = config
  }

  public abstract provide(): any
}

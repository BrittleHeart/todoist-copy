export default abstract class ServiceProvider<T> {
  protected config: Array<any> | object

  constructor(config: Array<any> | object) {
    this.config = config
  }

  public abstract provide(): T
}

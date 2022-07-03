import ServiceProvider from './ServiceProvider'

class DummyService extends ServiceProvider<string> {
  public provide(): string {
    throw new Error('Method not implemented.')
  }
}

describe('ServiceProvider', () => {
  // eslint-disable-next-line
  let instance: ServiceProvider<string>
  beforeAll(() => {
    instance = new DummyService({})
  })

  it('should implement provide function', () => {
    expect(instance.provide).toBeDefined()
  })
})

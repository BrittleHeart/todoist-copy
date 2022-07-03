import 'reflect-metadata'

import GlobalMiddleware from '@app/http/middlewares/GlobalMiddleware'
import Kernel, { container } from '@app/Kernel'
import '@app/http/controllers/UserController'

export async function bootstrap() {
  container.bind<Kernel>(Kernel).toSelf()
  container.bind<GlobalMiddleware>(GlobalMiddleware).toSelf()

  const kernel = container.get<Kernel>(Kernel)

  kernel.run()
}

bootstrap()

import 'reflect-metadata'
import 'dotenv/config'

import GlobalMiddleware from '@app/http/middlewares/GlobalMiddleware'
import LoggerServiceProvider from '@app/providers/LoggerServiceProvider'
import Kernel, { container } from '@app/Kernel'
import '@app/http/controllers/UserController'

export async function bootstrap() {
  container.bind<Kernel>(Kernel).toSelf()
  container.bind<GlobalMiddleware>(GlobalMiddleware).toSelf()
  container.bind<LoggerServiceProvider>(LoggerServiceProvider).toSelf()

  const kernel = container.get<Kernel>(Kernel)

  kernel.run()
}

bootstrap()

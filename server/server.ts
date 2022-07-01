import Kernel from "@app/Kernel"

console.log('works');
export async function bootstrap() {
  new Kernel().bootstrap()
}

bootstrap()
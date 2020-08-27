import { BaseContext } from "koa"

const CronometerMiddleware = () => async (ctx: BaseContext, next: () => Promise<any>) => {
  const initDate = new Date()
  console.log('iniciando cronometro')
  await next()
  const finalDate = new Date()
  const requestTime = finalDate.getTime() - initDate.getTime()
  console.log(`cronometro detenido: ${requestTime}ms`)
}

export { CronometerMiddleware }
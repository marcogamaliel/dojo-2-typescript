import { BaseContext } from "koa"
import { Middleware, KoaMiddlewareInterface } from "routing-controllers"

@Middleware({ type: 'before' })
export class CronometerMiddleware implements KoaMiddlewareInterface {
  public async use(context: BaseContext, next: (err?: any) => Promise<any>): Promise<any> {
    const initDate = new Date()
    console.log('iniciando cronometro')
    await next()
    const finalDate = new Date()
    const requestTime = finalDate.getTime() - initDate.getTime()
    console.log(`cronometro detenido: ${requestTime}ms`)
  }
}

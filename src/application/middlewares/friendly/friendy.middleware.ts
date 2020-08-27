import { KoaMiddlewareInterface, Middleware } from "routing-controllers"

@Middleware({ type: 'before' })
export class FriendlyMiddleware implements KoaMiddlewareInterface {
  async use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
    console.log('Un amigo llego!')
    await next()
    console.log('Un amigo se fue!')
  }
}

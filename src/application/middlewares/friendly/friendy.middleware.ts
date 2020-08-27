import { BaseContext } from "koa"

const FriendlyMiddleware = () => async (ctx: BaseContext, next: () => Promise<any>) => {
  console.log('Un amigo llego!')
  await next()
  console.log('Un amigo se fue!')
}

export { FriendlyMiddleware }
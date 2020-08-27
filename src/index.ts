import Koa from 'koa'
import Router from 'koa-router'
import Logger from 'koa-logger'
import { FriendlyMiddleware } from './application/middlewares/friendly/friendy.middleware'

const app = new Koa()
const router = new Router()
const port = 8004

router.get("/", async (ctx, next) => {
  ctx.body = '<h1>Hola Mundo 1</h1>'
  console.log('-------------------------')
  console.log('se ejecuta nuestra lógica GET')
  console.log('-------------------------')
  await next()
})

router.post("/", async (ctx, next) => {
  ctx.body = { msg: 'Hola mundo' }
  console.log('-------------------------')
  console.log('se ejecuta nuestra lógica POST')
  console.log('-------------------------')
  await next()
})

app
  .use(Logger())
  .use(FriendlyMiddleware())
  .use(FriendlyMiddleware())
  .use(router.routes())
  .listen(port, () => {
    console.log(`La aplicación ha iniciado en el puerto ${port}`)
  })

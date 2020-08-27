import Koa from 'koa'
import Router from 'koa-router'
import Logger from 'koa-logger'

const app = new Koa()
const router = new Router()
const port = 8004

router.get("/", async (ctx, next) => {
  ctx.body = '<h1>Hola Mundo 1</h1>'
  next()
})

router.get("/json", async (ctx, next) => {
  ctx.body = { msg: 'Hola mundo' }
  next()
})

app
  .use(Logger())
  .use(router.routes())
  .listen(port, () => {
    console.log(`La aplicación ha iniciado en el puerto ${port}`)
  })

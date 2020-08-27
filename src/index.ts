import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()
const port = 8004

router.get("/", async (ctx, next) => {
  ctx.body = '<h1>Hola Mundo</h1>'
  next()
})

app
  .use(router.routes())
  .listen(port, () => {
    console.log(`La aplicación ha iniciado en el puerto ${port}`)
  })

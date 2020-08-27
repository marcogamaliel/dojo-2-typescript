import 'reflect-metadata'
import { createKoaServer } from 'routing-controllers'
import { RootController } from './application/controllers/root/root.controller'
import { CronometerMiddleware } from './application/middlewares/cronometer/cronometer.middleware'

const app = createKoaServer({
  controllers: [
    RootController
  ],
  middlewares: [
    CronometerMiddleware,
  ]
})

app.init = (): void => {
  const port = 8004
  app.listen(port)
  console.log(`La aplicación ha iniciado en el puerto ${port}`)
}

app.init()


import Logger from 'koa-logger'
import { Controller, Get, Param, Post, UseBefore, BodyParam } from 'routing-controllers'
import { CronometerMiddleware } from '../../middlewares/cronometer/cronometer.middleware'
import { FriendlyMiddleware } from '../../middlewares/friendly/friendy.middleware'

@UseBefore(FriendlyMiddleware)
@Controller('/saludo')
export class RootController {
  @Get('/:name')
  public async saludo(@Param('name') name: string): Promise<string> {
    return this.getMessage(name, 'GET')
  }

  @Get('/')
  public async saludoRoot(): Promise<string> {
    return this.getMessage('Mundo', 'GET')
  }

  @Post('/')
  public async saludoPost(@BodyParam('name') name: string = 'Mundo'): Promise<{ msg: string }> {
    return { msg: this.getMessage(name, 'POST') }
  }

  private getMessage(name: string, verb: string): string {
    console.log('-------------------------')
    console.log(`se ejecuta nuestra lógica ${verb}`)
    console.log('-------------------------')
    return `Hola ${name}`
  }

}
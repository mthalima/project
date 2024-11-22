import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('form')
  root() {
    return { message: 'aleloia saiu o hello woeld com NESTJS!!' };
  }

  @Get('/form')
  @Render('form') // 'form.hbs' or 'form.ejs', depending on your setup
  getForm() {
    return {};
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Layout } from './view';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return (
      <Layout title="Document" >
        <p className="text-xl border border-black p-2">Hello World</p>
      </Layout>
    )
  }
}

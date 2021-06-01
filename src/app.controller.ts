import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Get('login')
  login(@Request() req): any {
    return req.user;
  }

  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}

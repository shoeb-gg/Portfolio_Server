import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

import { MessagesDto } from './common/dto/message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async saveMessage(@Body() msg: MessagesDto): Promise<boolean> {
    return await this.appService.saveMessage(msg);
  }
  @Get()
  async test(): Promise<boolean> {
    return true;
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

import { MessagesDto } from './common/dto/message.dto';

@Injectable()
export class AppService {
  private readonly prisma = new PrismaClient();

  async saveMessage(msg: MessagesDto): Promise<boolean> {
    try {
      await this.prisma.messages.create({
        data: {
          ...msg,
        },
      });

      return true;
    } catch {
      return false;
    }
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return 'Welcome to NestJS application. Created by Dmytro Yevlakhov.';
  }
}

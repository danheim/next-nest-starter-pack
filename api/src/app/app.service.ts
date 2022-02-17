import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to NestJS application. Created by Dmytro Yevlakhov.';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getId(id: number): string {
    return `Id is ${id}`;
  }
}

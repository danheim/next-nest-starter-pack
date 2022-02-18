import { CACHE_MANAGER, Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Cache } from 'cache-manager';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const value = await this.cacheManager.get<string | undefined>('hello');
    console.log('value is:', value);

    if (value) {
      return value;
    }

    const data = this.appService.getHello();

    await this.cacheManager.set('hello', data);

    return data;
  }
}
